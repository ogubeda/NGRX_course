import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import * as actions from './counter/counter.actions'
import { AppState } from './app.reducers'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number

  constructor(
    private store: Store<AppState>
  ) {
    this.counter = 10
    this.store.select('counter').subscribe(counter => {
      this.counter = counter
    })
  } // end_constructor

  public increment(): void {
    this.store.dispatch(actions.increment())
  } // end_increment

  public decrement(): void {
    this.store.dispatch(actions.decrement())
  } // end_decrement

}
