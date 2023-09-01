import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setText } from "../utils/Writer.js";
import { setHTML } from "../utils/Writer.js";

function _drawTime() {
    let time = new Date()
    let content = time.toDateString() + ' ' + time.toLocaleTimeString()
    setText('time', content)
}

function _drawWeather() {
    const content = AppState.weather.template
    setHTML('weather-section', content)
}
export class WeatherController {
    constructor() {
        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
            _drawWeather()
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }

    toggleDeg() {
        weatherService.toggleDeg()
        _drawWeather()
    }
    interval = setInterval(_drawTime, 1000)
}