export let SettingsView = `
<section class="row justify-content-center">
<div class="col-12">
    <section class="row">
        <div class="col-6 col-md-2 text-light" id="authorTag"></div>
    </section>
</div>
<form class="col-5 bg-card mt-5" onsubmit="app.SettingsController.saveSettings()">
   <h3 class="text-center">Settings</h3>
   <section class="row">
     <h4 class="col-3">Name: </h4>
     <input type="text" class="col-9 rounded" name="name">
   </section>
   <section class="row">
     <h4 class="col-3">Time: </h4>
     <h4 class="col-2">12Hr </h4>
     <input type="radio" class="col-1 rounded" name="time" value="12">
     <h4 class="col-2">24Hr </h4>
     <input type="radio" class="col-1 rounded" name="time" value="24">
   </section>
   <section class="row pt-3">
     <button class="btn btn-success" type="submit">Save Settings</button>
   </section>
 </form>
 <section class="row justify-content-center">
     <a href="" class="nav-link col-5">
        <button class="btn btn-danger w-100">Close Settings</button>
    </a>  
    </section>
</section>
`