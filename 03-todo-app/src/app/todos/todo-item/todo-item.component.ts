import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Todo } from '../models/todo.model';
import * as actions from '../../store/todos/todos.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo
  @ViewChild('inputLocal') textInputLocal!: ElementRef

  checkCompleted!: FormControl
  textInput!: FormControl
  editing: boolean = false

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed)
    this.textInput = new FormControl(this.todo.title, Validators.required)
    // this.todo = {...this.todo, completed: true}

    this.checkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }))
    })
  }

  edit() {
    this.editing = true
    this.textInput.setValue(this.todo.title)

    setTimeout(() => {
      this.textInputLocal.nativeElement.select()
    }, 0)

  }

  doneEditing() {
    this.editing = false

    if (this.textInput.invalid ||this.textInput.value === this.todo.title) return
    this.store.dispatch(actions.edit({ id: this.todo.id, text: this.textInput.value }))
  }

  public remove() {
    this.store.dispatch(actions.remove({ id: this.todo.id }))
  }

}
