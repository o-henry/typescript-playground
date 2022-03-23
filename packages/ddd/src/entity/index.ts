/**
 * @desc 엔터티는 다른 인스턴스를 구분하기 위해 명시적인 식별 필드(ID) 가 필요하다.
 * entity가 왜필요한가 => 비즈니스 로직이 포함된 엔티티를 통해 인스턴스를 생성하기 때문.
 */
export class _Person {
  constructor(public name: string) {}

  public get(): void {
    console.log(`Person name is ${this.name}`);
  }
}

// 다른 사람이 같은 이름을 갖는 경우
// 둘을 구분할 방법이 없다.
const Bob = new _Person('Bob');
const BobB = new _Person('Bob');

Bob.get();
BobB.get();

/**
 * @desc 이를 구분하기 위해서 id 필드를 추가한다.
 * id 필드를 통해 고유성을 지킨다.
 * */
export class Person {
  // id field 나 name field를 비즈니스 도메인의 요구사항에 맞춰 value object 로 표현하면 좀더 다양한 타입을 사용할 수 있다.
  constructor(public readonly id: string, public name: string) {}

  public get(): void {
    console.log(`Person name is ${this.name} and id is ${this.id}`);
  }
}

const Tom = new Person('abcd', 'Tom');
const TomB = new Person('efgc', 'Tom');

Tom.get();
TomB.get();
