import {Component, OnInit} from '@angular/core';
import {Todo} from './Todo';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mytodolist';

  todos: Todo[];
  newTodo: string;

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todoService.getTodoList().subscribe(

      result => {
        this.todos = result;
      },

      error => {
        alert('Loi~ ket noi! Vui long kiem tra lai backend.');
      }


    );
  }

  addTodo(todoText: string) {
    const todo: Todo = {
      title: todoText,
      complete: false
    };
    this.todos.push(todo);
  }
}
