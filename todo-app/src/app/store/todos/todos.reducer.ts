import { createReducer, on } from '@ngrx/store'
import { Todo } from 'src/app/todos/models/todo.model'
import * as actions from './todos.actions'

export const initialState: Todo[] = [
  new Todo('Finish Angular Course'),
  new Todo('Kill Dragon'),
  new Todo('Buy new TV'),
  new Todo('Buy new car'),
]

export const todosReducer = createReducer(
    initialState,
    on(actions.create, (state: Todo[], { text }) => [...state, new Todo(text)]),
    on(actions.toggle, (state: Todo[], { id }) => state.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    on(actions.edit, (state: Todo[], { id, text }) => state.map(todo => todo.id === id ? { ...todo, title: text } : todo)),
    on(actions.remove, (state: Todo[], { id }) => state.filter(todo => todo.id !== id)),
    on(actions.toggleAll, (state: Todo[], { completed }) => state.map(todo => ({ ...todo, completed }))),
    on(actions.clearCompleted, (state: Todo[]) => state.filter(todo => !todo.completed))
    )
