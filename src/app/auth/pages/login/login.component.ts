import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { validateForm } from '../../shared/directives/validate-form.directive';
import { AuthState } from 'src/app/store/auth/auth.state';
import { Store } from '@ngrx/store';
import {
  login,
  loginSuccess,
  loginFailed,
} from 'src/app/store/auth/auth.actions';
import { takeUntil } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { RootState } from 'src/app/store/root.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  loginFailed = false;

  destroyed$ = new Subject<boolean>();

  refUrl: string;

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<RootState>,
    private actions$: Actions
  ) {
    this.route.queryParamMap.subscribe((paramMap) => {
      this.refUrl = paramMap.get('ref');
    });
  }

  ngOnInit() {
    this.actions$
      .pipe(ofType(loginSuccess.type), takeUntil(this.destroyed$))
      .subscribe(() => {
        this.router.navigate([this.refUrl || '/']);
      });

    this.actions$
      .pipe(ofType(loginFailed.type), takeUntil(this.destroyed$))
      .subscribe(() => {
        this.loginFailed = true;
      });
  }

  submit() {
    if (this.loginForm.valid) {
      this.store.dispatch(
        login({
          payload: {
            email: this.email.value,
            password: this.password.value,
          },
        })
      );
    } else {
      validateForm(this.loginForm);
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
