import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { loadState } from "../utils/Store.js";
import { setText } from "../utils/Writer.js";
import { setHTML } from "../utils/Writer.js";


function _getName(){
    AppState.name = loadState('myName')
}

function _getClock(time){
    AppState.time = loadState('myTime')
    if(AppState.time == 24){
        return time.toLocaleTimeString([], {hour12:false, hour: "2-digit", minute: "2-digit"})
    } else {
        return time.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})
    }
}
function _drawTime() {
    let time = new Date()
    let content = time.toDateString() + ' ' + _getClock(time)
    setText('time', content)
    let greetingTime = _getGreetingTime(time)
    _getName()
    let greetingContent = `Good ${greetingTime} ${AppState.name}`
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
        _drawTime()
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