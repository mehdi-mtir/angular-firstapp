import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  todos = [
    {id : 1, task : "Présenter les composants Angular", state:"done"},
    {id : 2, task : "Présenter les mécanisme de binding", state:"pending"},
    {id : 3, task : "Introduction aux directives", state:"pending"}
  ]
}
