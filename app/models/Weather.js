export class Weather {
    constructor(data) {
        this.kelvin = data.main.temp
        this.celsius = this.toCelsius(this.kelvin)
        this.fahrenheit = this.toFahrenheit(this.celsius)
        this.icon = data.weather.icon
    }

    toCelsius(k) {
        let c = k - 273.15
        return c.toFixed(1)
    }

    toFahrenheit(c) {
        let f = c * (9 / 5) + 32
        return f.toFixed(1)
    }
}