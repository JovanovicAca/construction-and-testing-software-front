import { Routes } from "@angular/router";
import { LoginGuard } from "./guards/login/login.guard";
import { LoginComponent } from "./pages/login/login.component";
import { SimpleLoginComponent } from "./pages/simple-login/simple-login.component";
export const AuthRoutes: Routes = [
  {
    path: "login",
    pathMatch: "full",
    component: SimpleLoginComponent,
    canActivate: [LoginGuard],
  },
    {
    path: "login/admin",
    pathMatch: "full",
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
];
