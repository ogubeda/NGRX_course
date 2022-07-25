import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model'
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = []
  loading: boolean = false
  error: any

  constructor(
    private userService: UserService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('users').subscribe(({ users, loading, error }) => {
      this.users = users
      this.loading = loading
      this.error = error
    })
    this.store.dispatch(actions.loadUsers())
  }

}
