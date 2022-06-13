import { Injectable, OnApplicationShutdown } from "@nestjs/common";
import {
  Kafka,
  Consumer,
  ConsumerRunConfig,
  ConsumerSubscribeTopic,
} from "kafkajs";

@Injectable()
export class CousumerService implements OnApplicationShutdown {
  private readonly kafka = new Kafka({
    brokers: ["localhost:9092"],
  });
  private readonly consumers: Consumer[] = [];

  async consume(topic: ConsumerSubscribeTopic, config: ConsumerRunConfig) {
    const consumer = this.kafka.consumer({ groupId: "nestsjs-kafka" });
    await consumer.connect();
    await consumer.subscribe(topic);
    await consumer.run(config);
    this.consumers.push(consumer);
  }

  async onApplicationShutdown() {
    for (const consumer of this.consumers) {
      await consumer.disconnect();
    }
  }
}
