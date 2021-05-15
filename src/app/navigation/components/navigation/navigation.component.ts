import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription, Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RootState } from 'src/app/store/root.state';
import { logout } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  opened = false;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.loggedIn$ = this.store.pipe(select((state) => state.auth.loggedIn));
  }

  menuClicked() {
    this.opened = !this.opened;
  }

  linkClicked() {
    this.opened = false;
  }

  logout() {
    this.store.dispatch(logout());
  }
}
