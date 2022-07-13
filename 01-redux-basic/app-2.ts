import { incrementAction, decrementAction, multiplyAction, divideAction, resetAction } from './counter/counter.actions';
import { Action } from './ngrx-fake/ngrx';

function reducer(state = 10, action: Action) {
    switch (action.type) {
        case 'INCREMENT':
            return state += 1
        case 'DECREMENT':
            return state -= 1
        case 'MULTIPLY':
            return state *= action.payload
        case 'DIVIDE':
            return state /= action.payload
        case 'RESET':
            return state = 0
        default:
            return state
    }
}

console.log(reducer(10, incrementAction))
console.log(reducer(10, decrementAction))
console.log(reducer(10, multiplyAction))
console.log(reducer(10, divideAction))
console.log(reducer(10, resetAction))
