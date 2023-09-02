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

    async toggleCompleted(id) {
        let todo = AppState.todos.find(todo => todo.id == id)
        todo.completed = !todo.completed
        AppState.emit('todos')
        const res = await api.put(`api/todos/${id}`, todo)
    }

    async deleteTodo(id){
        let todo = AppState.todos.find(todo => todo.id == id)
        const res = await api.delete(`api/todos/${id}`)
        AppState.todos = AppState.todos.filter(todo => todo.id != id)
    }

}

export const todosService = new TodosService()