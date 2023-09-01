export class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
        this.toggle = true
    }

    get quoteTemplate() {
        return `
        <h6 class="text-center pb-4" id="quote" onmouseover="app.QuotesController.toggleAuth()">${this.content}</h6>
        `
    }
    get quoteTemplateHover() {
        return `
        <h6 class="text-center pb-4" onmouseleave="app.QuotesController.toggleAuth()">${this.content} -${this.author}</h6>`
    }

}