import { AppState } from "../AppState.js"
import { TodoModel } from "../models/TodoModel.js"
import { api } from "./AxiosService.js"
class TodosService {
    async getTodos() {
        const res = await api.get('api/todos')
        console.log(res.data)
        let todos = res.data.map(todo => new TodoModel(todo))
        AppState.todos = todos
    }
    async createTodo(formData) {
        const res = await api.post('api/todos', formData)
        console.log(res.data, 'creating todo')
        const newTodo = new TodoModel(res.data)
        AppState.todos.push(newTodo)
        AppState.emit('todos')
    }

}

export const todosService = new TodosService()