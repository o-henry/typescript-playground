import { z } from "zod"

const CalculateRiskProfile = (age: Age): Risk => (age < 60 ? Risk.Low : Risk.Medium)

const _Age = z.number().refine((v: number) => 0 <= v && v < 120, { message: "Age can't be more than 120." })
const __Age = z.number().refine((age: number) => 0 <= age && age < 120)
type Age = z.infer<typeof _Age>
type _Age = z.infer<typeof __Age>

enum Risk {
    Low,
    Medium,
    High,
}

const _CalculateRiskProfile = (age: _Age): Risk => (__Age.parse(age) < 60 ? Risk.Low : Risk.Medium)

// console.log(_Age.safeParse(9999))
// console.log(_Age.parse(90))
console.log(_CalculateRiskProfile(10)) // 0
console.log(_CalculateRiskProfile(70)) // 1
console.log(_CalculateRiskProfile(9999)) // Error
// console.log(_CalculateRiskProfile(-20)) // Error

export {}
