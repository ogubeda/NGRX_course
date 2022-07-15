import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as actions from '../../store/todos/todos.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  completed: boolean = false

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  public toggleAll() {
    this.completed = !this.completed
    this.store.dispatch(actions.toggleAll({ completed: this.completed }))
  }

}
