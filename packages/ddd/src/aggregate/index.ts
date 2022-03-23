/**
 * @desc aggregate는 엔티티와 value object의 집합 이며, 비즈니스 로직의 제한된 컨텍스트.
 * mutable 하지만 불변성(일관성)을 유지해야 한다.
 * aggregate의 public interface를 통해서만 변경할수 있어야 한다.
 *
 * 불변성을 유지하기 위해 유효성 검사를 해야한다.
 */

export class _Ticket {
  constructor() {}

  public AddMessage(from: string, body: string): void {
    const message = new Message(from, body);
    messages.push(message);
  }
}
