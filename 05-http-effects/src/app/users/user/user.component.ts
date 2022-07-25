import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store'
import { AppState } from '../../store/app.reducer';
import * as actions from '../../store/actions';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = {} as User

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('user').subscribe(({ user }) => {
      this.user = user;
    });

    this.route.params.subscribe(({ id }) => {
      this.store.dispatch(actions.loadUser({ id }))
    })
  }

}
