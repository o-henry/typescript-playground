namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean
    }

    const letterRegexp = /^[A-Za-z]+$/
    const numberRegexp = /^[0-9]+$/

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return letterRegexp.test(s)
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return s.length === 5 && numberRegexp.test(s)
        }
    }
}

let strings = ["Hello", "98052", "101"]

let validators: { [s: string]: Validation.StringValidator } = {}
validators["ZIP code"] = new Validation.ZipCodeValidator()
validators["Letters only"] = new Validation.LettersOnlyValidator()

for (let s of strings) {
    for (let name in validators) {
        console.log(`"{s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`)
    }
}
