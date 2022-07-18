import { createReducer, on } from "@ngrx/store"
import * as actions from "./filter.actions"

export const initialState: string = 'all'

export const filterReducer = createReducer(
  initialState,
  on(actions.setFilter, (state, { filter }) => filter),
)
