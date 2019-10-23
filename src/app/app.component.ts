import { Component } from '@angular/core';
import {Todo} from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytodolist';

  todos: Todo[];
  newTodo: string;

  constructor() {
    this.todos = [];
  }

  addTodo(todoText: string) {
    const todo: Todo = {
      text: todoText,
      complete: false
    };
    this.todos.push(todo);
  }
}
