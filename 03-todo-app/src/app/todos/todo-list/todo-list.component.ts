import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = []
  public currFilter!: string

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.store.select('todos').subscribe(todos => this.todos = todos)
    this.store.subscribe(({ todos, filter}) => {
      this.todos = todos
      this.currFilter = filter
    })
  }

}
