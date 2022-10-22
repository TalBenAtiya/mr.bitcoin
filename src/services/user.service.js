
export const userService = {
    getUser,
    login,
    handleTransaction,
}

function getUser() {
    let user = _loadFromStorage('loggedInUser')
    if (!user) return null
    return user
}

function handleTransaction(transaction) {
    let user = _loadFromStorage('loggedInUser')
    user.balance -= transaction.amount
    transaction.at = Date.now()
    user.transactions.push(transaction)
    _saveToStorage('loggedInUser', user)
    return user
}

function login(username) {
    let user = _loadFromStorage('loggedInUser')
    if (!user || user.name !== username) {
        user = getEmptyUser()
        user.name = username
        _saveToStorage('loggedInUser', user)
    }
    return user
}

function getEmptyUser() {
    return {
        name: "",
        balance: 100,
        transactions: [],
    }
}

function _saveToStorage(key, value) {
    const str = JSON.stringify(value);
    localStorage.setItem(key, str);
}

function _loadFromStorage(key) {
    const str = localStorage.getItem(key)
    return JSON.parse(str)
}