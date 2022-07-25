import { createReducer, on } from "@ngrx/store";
import { User } from "../../models/user.model";
import { loadUser, loadUserSuccess, loadUserFailure } from "../actions"

export interface UserState {
    id?: string
    user: User,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const userInitialState: UserState = {
    id: undefined,
    user: {} as User,
    loaded: false,
    loading: false,
    error: null
}

export const userReducer = createReducer(
    userInitialState,
    on(loadUser, (state, { id }) => ({...state, loading: true, id: id })),
    on(loadUserSuccess, (state, { user }) => ({...state, user: { ...user }, loading: false, loaded: true})),
    on(loadUserFailure, (state, { error }) => ({...state, error: {
        url: error.url,
        name: error.name,
        message: error.message
    }, loading: false, loaded: false}))
)
