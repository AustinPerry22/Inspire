import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js"

class SettingsService{
    saveSettings(formData){
        AppState.name = formData.name
        AppState.time = formData.time

        saveState('myName', AppState.name)
        saveState('myTime', AppState.time)
    }
}

export const settingsService = new SettingsService()