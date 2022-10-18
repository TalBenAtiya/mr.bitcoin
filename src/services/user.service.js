export const userService = {
    getUser,
}

const user = {
    name: "Pikachu",
    balance: 100,
    transactions: [],
}

function getUser() {
    return user
}