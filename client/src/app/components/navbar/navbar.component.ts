import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { getUser, getUserAuthentication } from '../login/state/login.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean;
  userName: string;

  constructor(private store: Store,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isUserAuthenticated();
    this.getUser();
  }

  isUserAuthenticated() {
    this.store.pipe(select(getUserAuthentication)).subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated
      console.log(isAuthenticated)
    })
  }

  getUser() {
    this.store.pipe(select(getUser)).subscribe(user => {
      this.userName = user.username
    })
  }

  logout() {
    this.authService.logOut();
  }

}
