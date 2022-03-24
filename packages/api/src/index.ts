export class _Controller {
  constructor(private repo) {}

  // 실제로는 controller의 역할이 아니다.
  public async excute() {
    const result = await this.repo.create; // ... find
    return result;
  }
}

// Lack of data consistency
/**
 * 위 코드의 예에서, 클라이언트는 result 를 API 호출 응답으로 받는다.
 * 이는 문제를 일으키게 하는데, 만약 db에 마이그레이션을 수행하고 새 컬럼을 추가/삭제/수정 한다면 어떻게 되겠는가?
 * 위 result 응답에 의존하는 각 클라이언트에 대한 API를 깨트리게된다.
 *
 * DTO의 필요성
 * DTO를 통해 API 응답 구조를 표준화한다.
 * DTO는 데이터 계약이다. 이 API를 사용하는 모든 사람에게 이 호출에서 항상 기대할 수 있는 형식을 제공한다.
 */

interface UserDTO {
  id: string;
  name: string;
  age: number;
  address: string;
  phone: number;
}

export class Controller {
  constructor(private repo) {}

  public async excute() {
    const find = await this.repo.create; // ... find

    const user: UserDTO = {
      id: find.id,
      name: find.name,
      age: find.age,
      address: find.address,
      phone: find.phone,
    };

    return user;
  }
}
