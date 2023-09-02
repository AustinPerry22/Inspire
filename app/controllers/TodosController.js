import { todosService } from "../services/TodosService.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js"
import { AppState } from "../AppState.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawTodos(){
    const todos = AppState.todos
    let content = ''
    let uncompletedNum = 0
    todos.forEach(todo => {
        content += todo.template
        if(!todo.completed){
            uncompletedNum++
        }
    })
    setHTML('my-todos', content)
    setText('todosUncompleted', `Left: ${uncompletedNum}`)
}

export class TodosController {
    constructor() {
        console.log('quotesController')
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

    async deleteTodo(id){
        try {
            if (await Pop.confirm('Are you sure you want to delete this toDo?')){
                await todosService.deleteTodo(id)
            }
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }

    async toggleCompleted(id){
        try {
            await todosService.toggleCompleted(id)
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }
}