export let MainView = /*html*/`
<section class="row my-3 justify-content-between">
      <div class="col-6 col-md-2 text-light" id="authorTag">
      
      </div>
      <div class="col-3 bg-card text-center">
        <h2 id="greeting">GOOD TIME NAME</h2>
      </div>
    </section>
    <section class="row justify-content-end">
      <div class="col-8 col-md-3 bg-card">
        <section class="row">
          <div class="col-6">
            <h5>Todo's</h5>
          </div>
          <div class="col-6 text-end">
            <h5 id="todosUncompleted">Left</h5>
          </div>
        </section>
        <form onsubmit="app.TodosController.createTodo()" class="row">
          <input class="col-10" type="text" placeholder="add todo" name="description">
          <button class="btn btn-outline-light col-2" type="submit">+</button>
        </form>

        <!-- to do list -->
        <section class="row" id="my-todos">
        </section>
      </div>
      </div>
    </section>
    <section class="row vh-40"></section>
    <section class="row align-items-end justify-content-center">
      <!-- quote placeholder -->
      <div class="col-8" id="quotePlace">
        <!-- quote template -->

      </div>
      <div class="col-11 bg-card rounded-3">
        <section class="row justify-content-between">
          <!-- weather placeholder -->
          <div class="col-2" id="weather-section">
          </div>
          <!-- time placeholder -->
          <div class="col-8 text-center align-items-center">
            <h1 class="m-0 pt-2 fw-biggest" id="time"></h1>
          </div>
          <div class="col-2">
            
          </div>
        </section>
        
      </div>
    </section>
    <section class="row justify-content-end">
      <div class="col-1">
        <button class="btn btn-outline-light"><i class="mdi mdi-cog"></i></button>
      </div>
    </section>
`