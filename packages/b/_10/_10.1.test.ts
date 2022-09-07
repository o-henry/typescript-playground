/**
 * Generics
 * 호출 방식에 따라 다양한 유형으로 작동학도록 코드를 의도하는 법
 */

describe("🚀 Generic", () => {
    it("test", () => {
        function identity<T>(input: T) {
            return input
        }

        const numeric = identity(123)
        const stringy = identity("123")

        const _identity = <T>(input: T) => input

        interface Box<T> {
            inside: T
        }

        let string_box: Box<string> = {
            inside: "abc",
        }

        class Secret<Key, Value> {
            key: Key
            value: Value

            constructor(key: Key, value: Value) {
                this.key = key
                this.value = value
            }

            get_value(key: Key): Value | undefined {
                return this.key === key ? this.value : undefined
            }
        }
    })
})

export {}
