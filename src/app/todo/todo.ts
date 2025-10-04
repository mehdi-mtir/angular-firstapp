import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  todos = [
    {id : 1, task : "Présenter les composants Angular", state:"done"},
    {id : 2, task : "Présenter les mécanisme de binding", state:"pending"},
    {id : 3, task : "Introduction aux directives", state:"pending"}
  ];
  action = "";
  taskToEdit = {
    id : 0,
    task : "",
    state : ""
  }

  setAction(newAction : string){
    this.action = newAction;
  }

  addTask(newTAsk : string){
    const task = {
      id : this.todos[this.todos.length - 1].id + 1,
      task : newTAsk,
      state : "pending"
    }
    this.todos = [...this.todos, task];
    this.setAction("");
  }

  showEditForm(task : {id : number, task : string, state : string}){
    console.log(task);
    this.taskToEdit = {...task};
    this.setAction("edit");
  }

  changeState(){
    this.taskToEdit.state = (this.taskToEdit.state == 'done')?'pending':'done';
  }

  editTask(){
    this.todos = this.todos.map(
      todo => (todo.id == this.taskToEdit.id)?this.taskToEdit:todo
    );
    this.setAction("");
  }

  deleteTask(id :number){
    if(confirm("Êtes-vous sûre de vouloir supprimer la tâche?"))
      this.todos = this.todos.filter(
        todo => todo.id != id
      );
  }

}
