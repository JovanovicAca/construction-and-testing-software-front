import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RootLayoutComponent } from './pages/root-layout/root-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderWaiterComponent } from './components/header-waiter/header-waiter.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderButtonComponent } from './components/header-button/header-button.component';
import { HeaderCheffComponent } from './components/header-cheff/header-cheff.component';
import { HeaderManagerComponent } from './components/header-manager/header-manager.component';
import { AuthInterceptor } from '../shared/interceptors/interceptor.interceptor';
import { HeaderCookComponent } from './components/header-cook/header-cook.component';

@NgModule({
  declarations: [
    AppComponent,
    RootLayoutComponent,
    NotFoundPageComponent,
    HeaderComponent,
    HeaderWaiterComponent,
    HeaderButtonComponent,
    HeaderCheffComponent,
    HeaderManagerComponent,
    HeaderCookComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    //SharedModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
