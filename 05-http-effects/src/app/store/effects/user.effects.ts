import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, mergeMap, tap, of } from "rxjs"
import * as actions from "../actions"
import { UserService } from "../../services/user.service"


@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    loadUser$ = createEffect((): any => 
        this.actions$.pipe(
            ofType( actions.loadUser ),
            mergeMap(
                ({ id }) => this.userService.getUserByID(id)
                    .pipe(
                        map(user => actions.loadUserSuccess({ user })),
                        catchError(err => of(actions.loadUserFailure({ error: err })))
                    )
            )
        )
    )
}