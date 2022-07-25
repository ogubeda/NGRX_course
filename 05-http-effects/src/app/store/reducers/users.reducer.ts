import { createReducer, on } from "@ngrx/store";
import { User } from "../../models/user.model";
import { loadUsers, loadUsersSuccess, loadUsersFailure } from "../actions"

export interface UsersState {
    users: User[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const initialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

export const usersReducer = createReducer(
    initialState,
    on(loadUsers, state => ({...state, loading: true})),
    on(loadUsersSuccess, (state, { users }) => ({...state, users: [...users], loading: false, loaded: true})),
    on(loadUsersFailure, (state, { error }) => ({...state, error: {
        url: error.url,
        name: error.name,
        message: error.message
    }, loading: false, loaded: false}))
)
