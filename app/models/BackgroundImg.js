export class BackgroundImg {
    constructor(data) {
        this.url = data.largeImgUrl
        this.author = data.author
    }

    get template() {
        return `<h6>Image By:</h6><h6>${this.author}</h6>`
    }
}