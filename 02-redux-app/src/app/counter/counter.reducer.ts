import { createReducer, on } from "@ngrx/store"
import * as actions from "./counter.actions"

export const initialState = 0;

export const counterReducer = createReducer(initialState,
  on(actions.increment, state => state + 1),
  on(actions.decrement, state => state - 1),
  on(actions.multiply, (state, { value }) => state * value),
  on(actions.divide, (state, { value }) => state / value),
  on(actions.reset, () => initialState)
)
