import { AppState } from "../AppState.js"
import { quotesService } from "../services/QuotesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"


function _drawQuote() {
    const quote = AppState.quote
    if (quote.toggle) {
        setHTML('quotePlace', quote.quoteTemplate)
    } else {
        setHTML('quotePlace', quote.quoteTemplateHover)
    }
}
export class QuotesController {
    constructor() {
        console.log('quotesController')
        this.getQuote()
    }

    async getQuote() {
        try {
            await quotesService.getQuote()
            _drawQuote()
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }

    toggleAuth() {
        quotesService.toggleAuth()
        _drawQuote()
    }
}