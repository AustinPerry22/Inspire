import { ImagesController } from "./controllers/ImagesController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { TodosController } from "./controllers/TodosController.js";
import { WeatherController } from "./controllers/WeatherController.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [ImagesController, QuotesController, TodosController, WeatherController],
    view: /*html*/`
    <div class="card">
      <div class="card-body">
        <p>Home Page</p>
        <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div>
    `
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */