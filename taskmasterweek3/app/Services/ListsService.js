import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService {
  deleteList(id) {
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
        ProxyState.lists = ProxyState.lists.filter(li => li.id != id),
        saveState()
        )
      
        }
    })
  
  
  }
  addList(newList) {
    ProxyState.lists = [...ProxyState.lists, new List(newList.name)]
    saveState()
  }
}


export const listsService = new ListsService();

