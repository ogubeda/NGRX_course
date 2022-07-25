import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url: string = "https://reqres.in/api"

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.url}/users?per_page6&delay=6`)
      .pipe(
        map((res: any) => res['data'])
      );
  }

  getUserByID(id: string) {
    return this.http.get(`${this.url}/users/${id}`)
      .pipe(
        map((res: any) => res['data'])
      );
  }
}
