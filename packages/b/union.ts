// union-type
function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount
}

// lazy

let taxNumber: string | number = calculateTax(100, false)

// type-assertion
let taxString = calculateTax(100, true) as string
