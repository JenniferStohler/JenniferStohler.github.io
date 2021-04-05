import TasksController from "./Controllers/TasksController.js";
import ListsController from "./Controllers/ListsController.js";

class App {
  listsController = new ListsController();
  tasksController = new TasksController();
}

window["app"] = new App();
