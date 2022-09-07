class Optional<T> {
    private value: T | undefined
    private assigned: boolean

    constructor(value: T) {
        if (value) {
            this.value = value
            this.assigned = true
        } else {
            this.value = undefined
            this.assigned = false
        }
    }

    has_value(): boolean {
        return this.assigned
    }

    get_value(): T {
        if (!this.assigned) throw Error()
        return <T>this.value
    }
}

export {}
