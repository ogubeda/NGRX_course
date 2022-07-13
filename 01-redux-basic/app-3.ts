import { multiplyAction } from './counter/counter.actions';
import { incrementAction } from './counter/counter.actions';
import { counterReducer } from './counter/counter.reducer'
import { Reducer } from './ngrx-fake/ngrx'
import { Action } from './ngrx-fake/ngrx'

class Store<T> {
    constructor(
        private reducer: Reducer<T>,
        private state: T
    ) {
    }

    public getState() {
        return this.state
    }

    public dispatch(action: Action) {
        this.state = this.reducer(this.state, action)
    }

}

const store = new Store<number>(counterReducer, 10)


console.log(store.getState())

store.dispatch(incrementAction)
store.dispatch(multiplyAction)


console.log(store.getState())
