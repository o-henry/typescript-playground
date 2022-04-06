import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "test-kafka",
  brokers: ["localhost:9092"],
});

const topicName = "gps_found";

const process = async () => {
  const admin = kafka.admin();
  await admin.connect();
  await admin.createTopics({
    topics: [
      {
        topic: topicName,
        numPartitions: 2,
        replicationFactor: 1,
      },
    ],
  });

  await admin.disconnect();
};

process().then(() => {
  console.log("Kafka topic created");
});
