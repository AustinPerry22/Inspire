export class TodoModel {
    constructor(data) {
        this.id = data.id || null
        this.completed = data.completed || false
        this.creatorId = data.creatorId || null
        this.description = data.description
    }

    get template(){
        return`<input class="col-2" type="checkbox">
        <h5 class="m-0 col-8 align-items-center d-flex">To do text</h5>
        <button class="btn btn-outline-danger col-2"><i class="mdi mdi-delete"></i></button>`
    }
}