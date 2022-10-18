import axios from "axios"


export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}


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

async function getMarketPriceHistory() {
    let priceHistory = loadFromStorage('priceHistoryDB')
    if (priceHistory) {
        console.log('History From Cache', priceHistory)
        return priceHistory
    } else {
        const marketHistory = await axios.get('https://api.blockchain.info/charts/market-price?timespan=10months&format=json&cors=true')
        priceHistory = marketHistory.data.values
        console.log('History From Axios', priceHistory)
        saveToStorage('priceHistoryDB', priceHistory)
        return priceHistory.data.values
    }
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
