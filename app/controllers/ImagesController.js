import { imagesService } from "../services/ImagesService.js"
import { Pop } from "../utils/Pop.js"

export class ImagesController {
    constructor() {
        console.log("images controller")
        this.getImage()
    }
    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }
}