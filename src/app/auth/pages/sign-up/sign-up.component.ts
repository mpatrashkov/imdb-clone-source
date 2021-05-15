import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../shared/directives/confirm-password.directive';
import { validateForm } from '../../shared/directives/validate-form.directive';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/store/auth/auth.state';
import { Actions, ofType } from '@ngrx/effects';
import {
  signUpSuccess,
  signUpFailed,
  signUp,
} from 'src/app/store/auth/auth.actions';
import { takeUntil } from 'rxjs/operators';
import { RootState } from 'src/app/store/root.state';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    },
    {
      validators: confirmPasswordValidator,
    }
  );

  signUpResult: Subscription;

  signUpFailed = false;

  destroyed$ = new Subject<boolean>();

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  constructor(
    private router: Router,
    private store: Store<RootState>,
    private actions$: Actions,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.actions$
      .pipe(ofType(signUpSuccess), takeUntil(this.destroyed$))
      .subscribe(() => {
        this.router.navigate(['/']);
      });

    this.actions$
      .pipe(ofType(signUpFailed.type), takeUntil(this.destroyed$))
      .subscribe(() => {
        this.signUpFailed = true;
      });
  }

  submit() {
    if (this.signUpForm.valid) {
      this.store.dispatch(
        signUp({
          payload: {
            email: this.email.value,
            password: this.password.value,
          },
        })
      );
    } else {
      validateForm(this.signUpForm);
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
