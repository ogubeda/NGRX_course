import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, mergeMap, tap, of } from "rxjs"
import * as actions from "../actions"
import { UserService } from "../../services/user.service"


@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    loadUsers$ = createEffect((): any => 
        this.actions$.pipe(
            ofType( actions.loadUsers ),
            mergeMap(
                () => this.userService.getUsers()
                    .pipe(
                        map(users => actions.loadUsersSuccess({ users })),
                        catchError(err => of(actions.loadUsersFailure({ error: err })))
                    )
            )
        )
    )
}