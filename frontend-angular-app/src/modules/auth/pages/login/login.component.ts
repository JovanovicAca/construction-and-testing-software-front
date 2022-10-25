import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/modules/shared/models/login';
import { AuthService } from '../../services/auth-service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  hide: Boolean = true;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  submit() {
    const auth: Login = {
      username: this.form.value.username,
      password: this.form.value.password,
    };

    this.authService.login(auth).subscribe(
      (result) => {
        localStorage.setItem('user', JSON.stringify(result));
        this.router.navigate(['/home']);
      },
      (error) => {}
    );
  }
}
