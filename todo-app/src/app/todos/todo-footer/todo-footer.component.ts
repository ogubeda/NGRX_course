import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as actions from '../../store/filter/filter.actions'
import * as todoActions from '../../store/todos/todos.actions'

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  currFilter!: string
  filters: string[] = ['all', 'active', 'completed']
  left: number = 0

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    // this.store.select('filter').subscribe(filter => {
    //   this.currFilter = filter
    // })

    this.store.subscribe(state => {
      this.currFilter = state.filter
      this.left = state.todos.filter(todo => !todo.completed).length
    })
  }

  public changeFilter(filter: string) {
    this.store.dispatch(actions.setFilter({ filter }))
  }

  public clearCompleted() {
    this.store.dispatch(todoActions.clearCompleted())
  }

}
