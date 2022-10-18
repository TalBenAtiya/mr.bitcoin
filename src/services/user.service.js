export const userService = {
    getUser,
}

const user = {
    name: "3CPO Robot",
    balance: 100,
    transactions: [],
    img: '1'
}

function getUser() {
    return user
}