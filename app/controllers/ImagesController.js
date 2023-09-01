import { AppState } from "../AppState.js"
import { imagesService } from "../services/ImagesService.js"
import { Pop } from "../utils/Pop.js"

function _drawImg() {
    console.log('drawing img')
    const img = AppState.backgroundImg.url
    const author = AppState.backgroundImg.author
    document.body.style.backgroundImage = `url('${img}')`

}

export class ImagesController {
    constructor() {
        console.log("images controller")
        this.getImage()
    }
    async getImage() {
        try {
            await imagesService.getImage()
            _drawImg()
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }


}