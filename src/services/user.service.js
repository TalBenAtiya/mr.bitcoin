export const userService = {
    getUser,
}

const user = {
    name: "Pikachu",
    balance: 100,
    transactions: [],
}

const getUser = () => {
    return user
}