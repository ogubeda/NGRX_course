import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  public async login() {
    if (this.loginForm.valid) {
      Swal.fire({
        title: 'Wait, please',
        didOpen: () => {
          Swal.showLoading()
        },
      })

      try {
        await this.authService.login(this.loginForm.value)
        Swal.close()
        this.route.navigate(['/'])
      } catch(err) {
        Swal.fire('Error', err.message, 'error')
      }
    }
  } // end_login

}
