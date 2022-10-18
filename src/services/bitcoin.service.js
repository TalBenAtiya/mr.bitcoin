import axios from "axios"


export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

const STORAGE_KEY = 'rateDB'

async function getRate() {
    let rate = loadFromStorage('rateDB')
    if (rate) {
        console.log('From Cache', rate);
        return rate
    } else {
        const rates = await axios.get('https://blockchain.info/ticker')
        rate = rates.data.USD.last
        console.log('From Axios', rate);
        saveToStorage('rateDB', rate)
        return rate
    }
}

function getMarketPriceHistory() {

}

function getAvgBlockSize() {

}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return (val) ? JSON.parse(val) : null;
}

function saveToStorage(key, val) {
    localStorage[key] = JSON.stringify(val);
}
