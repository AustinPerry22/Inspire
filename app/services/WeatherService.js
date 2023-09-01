import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {
    async getWeather() {
        const res = await api.get('api/weather')
        AppState.weather = new Weather(res.data)
        console.log(AppState.weather)
    }

    toggleDeg() {
        AppState.weather.isCelsius = !AppState.weather.isCelsius
    }
}

export const weatherService = new WeatherService()