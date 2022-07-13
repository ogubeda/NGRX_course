<<<<<<< HEAD
import { Action } from './../ngrx-fake/ngrx'

export function counterReducer(state = 10, action: Action) {
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
=======
import { Action } from './../ngrx-fake/ngrx'

export function counterReducer(state = 10, action: Action) {
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
>>>>>>> 026daa86d71e2b12314b7faed2051023760565e7
}