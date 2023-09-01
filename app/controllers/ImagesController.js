import { AppState } from "../AppState.js"
import { imagesService } from "../services/ImagesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawImg() {
    const img = AppState.backgroundImg.url
    const authorTempate = AppState.backgroundImg.template
    document.body.style.backgroundImage = `url('${img}')`
    setHTML('authorTag', authorTempate)


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