import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from 'src/modules/shared/interceptors/interceptor.interceptor';
import { AuthRoutes } from './auth.routes';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LoginNumpadComponent } from './components/login-numpad/login-numpad.component';
import { LoginComponent } from './pages/login/login.component';
import { SimpleLoginComponent } from './pages/simple-login/simple-login.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  declarations: [
    LoginComponent,
    SimpleLoginComponent,
    LoginButtonComponent,
    LoginNumpadComponent,
  ],
})
export class AuthModule {}
