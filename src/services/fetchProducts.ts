import axios from 'axios'

const md5 = require('md5')

const BASE_URL = 'http://api.valantis.store:40000/'
const API_KEY = 'Valantis'
const CONTENT_TYPE_JSON = 'application/json'

type Params = {
    offset: number
    limit: number
    ids?: string[]
    price?: number
    field?: string
}

type Headers = {
    'X-Auth': string
    'Content-Type': string
}

const generateMd5 = (): string => {
    const timeNow = new Date()
    const month = timeNow.getMonth() + 1
    const formattedMonth = month < 10 ? `0${month}` : month
    return md5(`${API_KEY}_${timeNow.getFullYear()}${formattedMonth}${timeNow.getDate()}`)
}

const generateHeaders = (): Headers => {
    return {
        'X-Auth': generateMd5(),
        'Content-Type': CONTENT_TYPE_JSON
    }
}

export const fetchProducts = async (action: string, params: Params, isRepeat: boolean = false) => {
    try {
        const { data } = await axios.post(BASE_URL, { action, params },{ headers: generateHeaders() })
        console.log(data)
    }
    catch (e) {
        isRepeat = !isRepeat
        if (isRepeat) {
            fetchProducts(action, params, isRepeat)
        }
        console.error(e)
    }
}
