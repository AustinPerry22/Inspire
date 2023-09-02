export class TodoModel {
    constructor(data) {
        this.id = data.id || null
        this.completed = data.completed || false
        this.creatorId = data.creatorId || null
        this.description = data.description
    }

    get template(){
        return`<input class="col-2" type="checkbox" ${this.isChecked()} onchange="app.TodosController.toggleCompleted('${this.id}')">
        <h5 class="m-0 col-8 align-items-center d-flex">${this.description}</h5>
        <button class="btn btn-outline-danger col-2" onclick="app.TodosController.deleteTodo('${this.id}')"><i class="mdi mdi-delete"></i></button>`
    }

    isChecked(){
        if(this.completed) return 'checked'
        return''
    }
}