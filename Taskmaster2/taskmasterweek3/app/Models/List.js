import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor(name, id = generateId()) {
    this.id = id
    this.name = name
    this.color = color
   }


  get Template() {
    return /*html*/`
    <div class="col-md-4 mt-5">
            <div class="list-card shadow bg-yellow">
                <div class="${this.color} p-4 d-flex justify-content-between">
                    <div class="d-flex flex-column">
                        <h3 class="mt-4 text-dark">${this.name}</h3>
                        <div class="text-dark">${this.incompleteTasks} / ${this.allTasks} remaining</div>
                    </div>
                    <i class="fas fa-dumpster ml-3" onclick="app.listsController.deleteList('${this.id}')" title='delete'></i>
                </div>
                <div class="">
                    <ul>
                        ${this.Tasks}
                    </ul>
                </div>
                <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
                    <input type="text" name="name" id="name" class="form-control" placeholder="Add Task Here..."
                        aria-describedby="helpId" required minlength="3" maxlength="50">
                    <button type="submit" class="btn btn-success ml-2" title='add task here'><i class="fas fa-plus-circle"></i></button>
                </form>
            </div>
        </div>
    `
    
  }

  get Tasks() {
    let tasks = ProxyState.tasks.filter(ti => ti.listId === this.id)
    let template = ''
    tasks.forEach(ti => template += ti.Template)
    return template
  }

  get allTasks(){
    let allTasks = ProxyState.tasks.filter(ti => ti.listId === this.id)
    return allTasks.length
}


get incompleteTasks(){
let incompleteTasks = ProxyState.tasks.filter(ti => ti.listId === this.id && ti.checked == false)
return incompleteTasks.length

}
}

