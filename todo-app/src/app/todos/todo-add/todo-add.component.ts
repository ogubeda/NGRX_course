import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state'
import * as actions from '../../store/todos/todos.actions'

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  public txtInput: FormControl

  constructor(
    private store: Store<AppState>
  ) {
    this.txtInput = new FormControl('', Validators.required)
  }

  ngOnInit(): void {
  }

  public addTodo(): void {
    if (this.txtInput.invalid) return
    this.store.dispatch(actions.create({ text: this.txtInput.value }))

    this.txtInput.reset()

  }

}
