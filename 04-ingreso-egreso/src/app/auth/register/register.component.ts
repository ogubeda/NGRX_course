import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  public async createUser() {
    if (this.formGroup.valid) {
      Swal.fire({
        title: 'Wait, please',
        didOpen: () => {
          Swal.showLoading()
        },
      })
      try {
        await this.authService.createUser(this.formGroup.value)
        Swal.close()
        this.route.navigate(['/'])
      } catch(err) {
        Swal.fire('Error', err.message, 'error')
      }

    }
  }

}
