/* literal */
let obj: { prop: boolean }

/* interface */
interface Obj {
    prop: boolean
}

let _obj: Obj

describe("🚀 Object", () => {
    it("should_be_instance", () => {
        const obj = {}
        expect(obj).toBeInstanceOf(Object)
    })

    it("Mapped types", () => {
        interface Point {
            x: number
            y: number
        }

        type _Point = {
            [Key in keyof Point]: Point[Key]
        }
    })
})
