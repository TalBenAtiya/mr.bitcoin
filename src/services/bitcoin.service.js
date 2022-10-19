import axios from "axios"
import { storageService } from "./async-storage.service";


export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}


async function getRate() {
    let rate = _loadFromStorage('rateDB')
    console.log('rate:', rate)
    if (rate && (1000 * 60 * 5 > Date.now() - rate.updatedAt)) {
        console.log('From Cache', rate);
        return rate.value
    } else {
        const rates = await axios.get('https://blockchain.info/ticker')
        rate = {
            value: rates.data.USD.last,
            updatedAt: Date.now(),
        }
        console.log('From Axios', rate)
        _saveToStorage('rateDB', rate)
        return rate.value
    }
}

async function getMarketPriceHistory() {
    let priceHistory = _loadFromStorage('priceHistoryDB')
    if (priceHistory && (1000 * 60 * 5 > Date.now() - priceHistory.updatedAt)) {
        console.log('History From Cache', priceHistory)
        return priceHistory.values
    } else {
        const marketHistory = await axios.get('https://api.blockchain.info/charts/market-price?timespan=10months&format=json&cors=true')
        priceHistory = {
            values: marketHistory.data.values,
            updatedAt: Date.now(),
        }
        console.log('History From Axios', priceHistory)
        _saveToStorage('priceHistoryDB', priceHistory)
        return priceHistory.values
    }
}

function getAvgBlockSize() {

}

function setWithExpiry(key, value, ttl) {
	const now = new Date()

	// `item` is an object which contains the original value
	// as well as the time when it's supposed to expire
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	}
	localStorage.setItem(key, JSON.stringify(item))
}

function _saveToStorage(key, value) {
    const str = JSON.stringify(value);
    localStorage.setItem(key, str);
}

function _loadFromStorage(key) {
    const str = localStorage.getItem(key)
    return JSON.parse(str)
}