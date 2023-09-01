import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setText } from "../utils/Writer.js";

function _drawTime() {
    let time = new Date()
    let content = time.toDateString() + ' ' + time.toLocaleTimeString()
    setText('time', content)
}
export class WeatherController {
    constructor() {
        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }
    interval = setInterval(_drawTime, 1000)
}