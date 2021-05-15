import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/ui/services/request/request.service';
import { HttpParams } from '@angular/common/http';
import { authKey } from 'src/app/config';
import { login, signUp } from '../../endpoints';
import {
  LoginSuccessfulResult,
  LoginFailedResult,
} from '../../types/loginResult';
import { LoggedUser } from '../../types/loggedUser';
import { BehaviorSubject, Observable } from 'rxjs';
import { share, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser: BehaviorSubject<LoggedUser> = new BehaviorSubject({
    email: '',
    logged: false,
  });

  constructor(private request: RequestService) {}

  login(email: string, password: string): Observable<LoginSuccessfulResult> {
    const request$ = this.request
      .post<
        LoginSuccessfulResult,
        {
          email: string;
          password: string;
        }
      >(
        login,
        {
          email,
          password,
        },
        {
          key: authKey,
        }
      )
      .pipe(share());

    request$.pipe(take(1)).subscribe(() => {
      this.loggedUser.next({
        logged: true,
        email,
      });
    });

    return request$;
  }

  logout(): void {
    this.loggedUser.next({
      logged: false,
      email: '',
    });
  }

  signUp(email: string, password: string) {
    const request$ = this.request
      .post<
        LoginSuccessfulResult,
        {
          email: string;
          password: string;
        }
      >(
        signUp,
        {
          email,
          password,
        },
        {
          key: authKey,
        }
      )
      .pipe(share());

    request$.pipe(take(1)).subscribe(() => {
      this.loggedUser.next({
        logged: true,
        email,
      });
    });

    return request$;
  }
}
