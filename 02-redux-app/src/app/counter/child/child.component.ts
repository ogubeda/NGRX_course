import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../../app.reducers'
import * as actions from '../counter.actions'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  counter: number

  constructor(
    private store: Store<AppState>
  ) {
    this.counter = 0
  }

  ngOnInit(): void {
    this.store.select('counter').subscribe(counter => {
      this.counter = counter
    })
  }

  public multiply(): void {
    this.store.dispatch(actions.multiply({ value: 4 }))
  }

  public divide(): void {
    this.store.dispatch(actions.divide({ value: 6 }))
  }
}
