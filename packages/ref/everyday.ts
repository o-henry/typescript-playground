let myName: string = "Alice"

function greet(name: string): void {
    console.log("Hello, " + name.toUpperCase() + "!!")
}

const getFavoriteNumber = (): number => 26

const names = ["Alice", "Bob", "Eve"]
names.forEach((s: string) => console.log(s.toUpperCase()))

function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x)
    console.log("The coordinate's y value is " + pt.y)
}

printCoord({ x: 3, y: 8 })

function printName(obj: { first: string; last?: string }) {
    // lazy 처리
    // ...
    console.log(obj.last?.toUpperCase())
}

printName({ first: "Bob" })
printName({ first: "Alice", last: "Alisson" })

// UNION TYPE
function printId(id: number | string) {
    typeof id === "string" ? console.log(id.toUpperCase()) : console.log(id)
}

printId(101)
printId("202")

/**
 * type alias
 */
type Point = {
    x: number
    y: number
}

function _printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x)
    console.log("The coordinate's y value is " + pt.y)
}

_printCoord({ x: 100, y: 100 })

type ID = number | string

/**
 * 타입 단언
 * 사용자가 해당 코드가 어떤 값을 반환할 것인지를 아는 경우 as 를 통해 해당 타입을 단언 할 수 있다.
 * 동일한 의미로 <>를 사용할 수 있다.
 */
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement
const _myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas")

/**
 * 리터럴과 유니언
 */
function printText(s: string, alignment: "left" | "right" | "center") {} // enum
printText("Hello, world", "left") // need to use named arguments.

/**
 *
 * 객체를 사용하여 변수를 초기화하면, TypeScript는 해당 객체의 프로퍼티는 이후에 그 값이 변화할 수 있다고 가정합니다. 예를 들어, 아래와 같은 코드를 작성하는 경우를 보겠습니다.
 * TypeScript는 이를 오류로 간주하지 않습니다. 왜냐하면 타입은 읽기 및 쓰기 두 동작을 결정하는 데에 사용되기 때문입니다.
 */
declare function handleRequest(url: string, method: "GET" | "POST"): void
const req = { url: "https://typescript.org", method: "GET" } as const
handleRequest(req.url, req.method) // Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.ts(2345)
