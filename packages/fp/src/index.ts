const CalculateRiskProfile = (age: Age): Risk => (age._value < 60 ? Risk.Low : Risk.Medium)

enum Risk {
    Low, // 0
    Medium, // 1
    High, // 2
}

class Age {
    constructor(private value: number) {
        this.value = value
    }

    get _value(): number {
        return this.value
    }

    public Age(value: number) {
        if (!Age.IsValid(value)) throw new Error(`${value} is not a valid age.`)
        this.value = value
    }

    private static IsValid = (age: number): boolean => 0 <= age && age < 120
}

console.log(CalculateRiskProfile(new Age(49)))
console.log(CalculateRiskProfile(new Age(-69)))
console.log(CalculateRiskProfile(new Age(9229)))

export {}
