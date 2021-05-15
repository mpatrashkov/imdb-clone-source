import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AuthRouting } from './auth-routing.module';
import { PipesModule } from '../ui/pipes/pipes.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [CommonModule, AuthRouting, ReactiveFormsModule, PipesModule],
})
export class AuthModule {}
