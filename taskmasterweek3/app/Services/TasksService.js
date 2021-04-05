import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksService {

  
  deleteTask(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
          ProxyState.tasks = ProxyState.tasks.filter(ti => ti.id != id),
          saveState()
          )
      }
    })

  }
  addTask(rawTask) {
    ProxyState.tasks.push(new Task(rawTask.name, rawTask.listId))
    saveState(),
    ProxyState.tasks = ProxyState.tasks
  }
tasksCheckBox(bool, id) {
  ProxyState.tasks.find(ti => ti.id === id).checked = bool
  saveState()
  ProxyState.tasks = ProxyState.tasks
}
}

export const tasksService = new TasksService();