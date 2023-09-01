import { todosService } from "../services/TodosService.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js"
import { AppState } from "../AppState.js";

function _drawTodos(){
    const todos = AppState.todos
    let content = ''
    todos.forEach(todo => content += todo.template)
    
}
export class TodosController {
    constructor() {
        AppState.on('account', this.getTodos)
        AppState.on('todos', _drawTodos)
    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            Pop.error(error)
        }
    }
    async createTodo() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            await todosService.createTodo(formData)
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }

    }
}