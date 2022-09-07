function get<T, Key extends keyof T>(container: T, key: Key) {
    return container[key]
}

const roles = {
    favorite: "Fargo",
    others: ["Almost Famous", "Burn After Reading"],
}

const favorite = get(roles, "favorite")
