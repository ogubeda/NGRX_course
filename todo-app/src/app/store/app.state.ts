import { ActionReducerMap } from "@ngrx/store"
import { Todo } from "../todos/models/todo.model"
import { filterReducer } from "./filter/filter.reducer"
import { todosReducer } from "./todos/todos.reducer"

export interface AppState {
  todos: Todo[],
  filter: string
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todosReducer,
  filter: filterReducer
}
