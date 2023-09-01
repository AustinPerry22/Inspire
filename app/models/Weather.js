export class Weather {
    constructor(data) {
        this.kelvin = data.main.temp
        this.celsius = this.toCelsius(this.kelvin)
        this.fahrenheit = this.toFahrenheit(this.celsius)
        this.title = data.weather[0].description
        // original link has undefined in, but other icon has what to replace it with
        this.icon = data.weather.icon.replace('undefined', data.weather[0].icon)
        this.isCelsius = true
    }

    toCelsius(k) {
        let c = k - 273.15
        return c.toFixed(1)
    }

    toFahrenheit(c) {
        let f = c * (9 / 5) + 32
        return f.toFixed(1)
    }

    get template() {
        return `
        <section class="row selectable" id="weather-template" onclick="app.WeatherController.toggleDeg()">
          <div class="col-5">
            <h4 class="pt-2">${this.farOrCel()}</h4>
            <h4>${this.title}</h4>
          </div>
          <div class="col-7">
            <img class="img-fluid h-75" src="${this.icon}"/>
          </div>
        </section>`
    }

    farOrCel() {
        if (this.isCelsius) return this.celsius + 'C'
        return this.fahrenheit + 'F'
    }
}