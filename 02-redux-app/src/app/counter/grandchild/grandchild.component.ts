import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../../app.reducers'
import * as actions from '../counter.actions'

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {
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

  public reset(): void {
    this.store.dispatch(actions.reset())
  }

}
