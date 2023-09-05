export class BackgroundImg {
    constructor(data) {
        this.url = data.largeImgUrl
        this.author = data.author
    }

    get template() {
        return `<div class="bg-card"><h6>Image By:</h6><h6>${this.author}</h6><button class="btn btn-outline-light" onclick="app.ImagesController.getImage()">New Picture</button></div>`
    }
}