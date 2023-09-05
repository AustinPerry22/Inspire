import { ImagesController } from "./controllers/ImagesController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { SettingsController } from "./controllers/SettingsController.js";
import { TodosController } from "./controllers/TodosController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { MainView } from "./views/MainView.js";
import { SettingsView } from "./views/SettingsView.js";
/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [ImagesController, QuotesController, TodosController, WeatherController],
    view: MainView
  },
  {
    path: '#/settings',
    controller: [SettingsController, ImagesController],
    view: SettingsView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */