import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setText } from "../utils/Writer.js";
import { setHTML } from "../utils/Writer.js";

function _drawTime() {
    let time = new Date()
    let content = time.toDateString() + ' ' + time.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})
    setText('time', content)
    let greetingTime = _getGreetingTime(time)
    let greetingContent = `Good ${greetingTime} ${AppState.account.name}`
    setText('greeting', greetingContent)
}

function _drawWeather() {
    const content = AppState.weather.template
    setHTML('weather-section', content)
}

function _getGreetingTime(date){
    const hour = date.getHours()
    if(hour < 12) return "Morning"
    if(hour < 17) return "Afternoon"
    return "Evening"
}

export class WeatherController {
    constructor() {
        console.log('quotesController')
        this.getWeather()
        AppState.on('account', _drawTime)
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
    interval = setInterval(_drawTime, 10000)
}