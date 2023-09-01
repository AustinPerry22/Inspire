import { AppState } from "../AppState.js"
import { BackgroundImg } from "../models/BackgroundImg.js"
import { api } from "./AxiosService.js"

class ImagesService {
    async getImage() {
        let res = await api.get('api/images')
        AppState.backgroundImg = new BackgroundImg(res.data)
        console.log(AppState.backgroundImg)
    }
}

export const imagesService = new ImagesService()