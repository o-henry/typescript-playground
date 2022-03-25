/**
 * @desc aggregate는 엔티티와 value object의 집합 이며, 비즈니스 로직의 제한된 컨텍스트.
 * mutable 하지만 불변성(일관성)을 유지해야 한다.
 * aggregate의 public interface를 통해서만 변경할수 있어야 한다.
 *
 * 불변성을 유지하기 위해 유효성 검사를 해야한다.
 *
 *
 * 내가 생각하는 aggregate
 * aggregate를 경계로 비즈니스 로직이 나눠진다. (bounded context)
 * 각각의 거대한 blueprint 가 되고, 불변성을 지킨다.
 *
 * service에는 비즈니스 로직이 많이? 포함되서는 안된다. 그럴경우 anemic domain model이 된다.
 * 그럼 언제사용해야 하는가 => 코드를 구현했을때 부자연스러움을 봤을때 인데, 이는 user.exist(user) 같이 사용자가 사용자가 존재하는 등의 확인하는 코드등이 부자연스러운 코드다.
 * service는 aggregate root에 부합하는 entity(객체)를 생성하고, repository를 통해 db에 저장한다.
 */

export class _Ticket {
  constructor() {}

  public AddMessage(from: string, body: string): void {
    const message = new Message(from, body);
    messages.push(message);
  }
}
