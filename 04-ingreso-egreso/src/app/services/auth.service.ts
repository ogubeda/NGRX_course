import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private ngFireAuth: AngularFireAuth
  ) { }

  initAuthListener() {
    this.ngFireAuth.authState.subscribe(user => {
      console.log(user)
    })
  }

  createUser(values: any) {
    const { user, email, password } = values

    return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
  }

  login(values: any) {
    const { email, password } = values

    return this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.ngFireAuth.signOut()
  }

}
