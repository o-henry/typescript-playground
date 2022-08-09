/**
 * 목표 : 재사용 가능한 컴포넌트를 생성하는 것
 */

/**
 * signature: number -> number
 * @param arg number
 * @returns number
 */
function identity(arg: number): number {
    return arg
}

function _identity<T>(arg: T): T {
    return arg
}

let output = _identity<string>("hello world")

// impure
function loggingIdentity<T>(args: T[]): T[] {
    console.log(args.length)
    return args
}

// 동일한 signature
let __identity: <T>(arg: T) => T = _identity

/**
 * multiple generic types
 */
function usingTwoTypes<A, B>(first: A, second: B) {}
usingTwoTypes(1, "test")
usingTwoTypes(true, false)

// 제약
class Concatenator<T extends Array<string> | Array<number>> {
    public concatenateArray(items: T): string {
        let returnString = ""
        for (let i = 0; i < items.length; i++) {
            returnString += i > 0 ? "," : ""
            returnString += items[i].toString()
        }
        return returnString
    }
}

let concator = new Concatenator()

let concatResult = concator.concatenateArray(["first", "second", "third"])

console.log(`${concatResult}`)
