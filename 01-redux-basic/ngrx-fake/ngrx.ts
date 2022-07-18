<<<<<<< HEAD
export interface Action {
    type: string
    payload?: any
}

export interface Reducer<T> {
    (state: T, action: Action): T
=======
export interface Action {
    type: string
    payload?: any
}

export interface Reducer<T> {
    (state: T, action: Action): T
>>>>>>> 026daa86d71e2b12314b7faed2051023760565e7
}