<<<<<<< HEAD
import { createStore, Store } from 'redux'
import { incrementAction } from './counter/counter.actions'
import { counterReducer } from './counter/counter.reducer'

const store: Store = createStore(counterReducer)

store.subscribe(() => console.log('sub:', store.getState()))

=======
import { createStore, Store } from 'redux'
import { incrementAction } from './counter/counter.actions'
import { counterReducer } from './counter/counter.reducer'

const store: Store = createStore(counterReducer)

store.subscribe(() => console.log('sub:', store.getState()))

>>>>>>> 026daa86d71e2b12314b7faed2051023760565e7
store.dispatch(incrementAction)