import { settingsService } from "../services/SettingsService.js"
import { getFormData } from "../utils/FormHandler.js"

export class SettingsController{
    constructor(){
        
    }
    saveSettings(){
        window.event.preventDefault()
        const form = window.event.target
        const formData = getFormData(form)
        settingsService.saveSettings(formData)
    }
}   