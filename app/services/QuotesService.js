import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuotesService {
    toggleAuth() {
        AppState.quote.toggle = !AppState.quote.toggle
    }

    async getQuote() {
        let res = await api.get('api/quotes')
        AppState.quote = new Quote(res.data)
    }
}

export const quotesService = new QuotesService()