import { createAction, props } from '@ngrx/store'

export const create = createAction(
  '[Todo] Create',
  props<{ text: string }>()
)

export const toggle = createAction(
  '[Todo] Toggle',
  props<{ id: number }>()
)

export const edit = createAction(
  '[Todo] Edit',
  props<{ id: number, text: string }>()
)

export const remove = createAction(
  '[Todo] Delete',
  props<{ id: number }>()
)

export const toggleAll = createAction(
  '[Todo] Toggle All',
  props<{ completed: boolean }>()
)

export const clearCompleted = createAction(
  '[Todo] Clear Completed'
)
