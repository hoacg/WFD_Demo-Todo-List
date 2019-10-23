import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @Output() enter = new EventEmitter<string>();
  newTodo: string;

  constructor() { }

  ngOnInit() {
  }

  goiDuLieu() {
    if (this.newTodo.trim().length > 0) {
      this.enter.emit(this.newTodo);
    }
  }


}
