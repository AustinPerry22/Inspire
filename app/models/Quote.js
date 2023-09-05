export class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
        this.toggle = true
    }

    get quoteTemplate() {
        return `
        <h6 class="text-center my-4 p-1 bg-card" id="quote" onmouseover="app.QuotesController.toggleAuth()">${this.content}</h6>
        `
    }
    get quoteTemplateHover() {
        return `
        <h6 class="text-center my-4 p-1 bg-card" onmouseleave="app.QuotesController.toggleAuth()">${this.content} -${this.author}</h6>`
    }

}