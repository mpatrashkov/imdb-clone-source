import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NotLoggedGuard } from './shared/guards/not-logged/not-logged.guard';

const routes: Routes = [
  { path: 'signIn', component: LoginComponent, canActivate: [NotLoggedGuard] },
  { path: 'signUp', component: SignUpComponent, canActivate: [NotLoggedGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRouting {}
