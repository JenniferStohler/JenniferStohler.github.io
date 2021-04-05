  
import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";
export function saveState() {
  localStorage.setItem('taskmaster', JSON.stringify({
    tasks: ProxyState.tasks,
    lists: ProxyState.lists
  }))
}
export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskmaster'))
  if (data) {
    // the boxes that hold content
    ProxyState.tasks = data.tasks.map(task => new Task(task.name, task.id , task.listId, task.checked))
    ;
    // the content inside the box
    ProxyState.lists = data.lists.map(list => new List(list.name, list.color, list.id));
  }
}