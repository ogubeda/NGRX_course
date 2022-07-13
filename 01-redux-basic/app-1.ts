<<<<<<< HEAD
// Actions

interface Action {
    type: string
    payload?: any
}

const incrementAction: Action = {
    type: 'INCREMENT'
}

const decrementAction: Action = {
    type: 'DECREMENT'
}

const multiplyAction: Action = {
    type: 'MULTIPLY',
    payload: 2
}

const divideAction: Action = {
    type: 'DIVIDE',
    payload: 2
}

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
        default:
            return state
    }
}
console.log(reducer(10, incrementAction))
console.log(reducer(10, decrementAction))
console.log(reducer(10, multiplyAction))
console.log(reducer(10, divideAction))

=======
// Actions

interface Action {
    type: string
    payload?: any
}

const incrementAction: Action = {
    type: 'INCREMENT'
}

const decrementAction: Action = {
    type: 'DECREMENT'
}

const multiplyAction: Action = {
    type: 'MULTIPLY',
    payload: 2
}

const divideAction: Action = {
    type: 'DIVIDE',
    payload: 2
}

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
        default:
            return state
    }
}
console.log(reducer(10, incrementAction))
console.log(reducer(10, decrementAction))
console.log(reducer(10, multiplyAction))
console.log(reducer(10, divideAction))

>>>>>>> 026daa86d71e2b12314b7faed2051023760565e7
