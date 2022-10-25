import { Component, OnInit, Input } from '@angular/core';
import { Login } from 'src/modules/shared/models/login';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.css'],
})
export class SimpleLoginComponent {
  value: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  addInput(event: Event) {
    console.log(event);
  }
  clickButton(input: string) {
    this.value = this.value + input;
    if (this.value.length == 4) {
      this.submit();
      this.value = '';
    }
  }
  submit() {
    const auth: Login = {
      username: this.value,
      password: this.value,
    };

    this.authService.login(auth).subscribe(
      (result) => {
        this._snackBar.open('Logged in');
        localStorage.setItem('user', JSON.stringify(result));
        this.router.navigate(['/home']);
      },
      (error) => {
        this._snackBar.open('Wrong password');
      }
    );
  }
}
