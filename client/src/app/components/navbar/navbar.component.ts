import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { getUserAuthentication } from '../login/state/login.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated;

  constructor(private store: Store,
              private authService: AuthService
              ) { }

  ngOnInit(): void {
    this.store.pipe(select(getUserAuthentication)).subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated
      console.log(isAuthenticated)
    })
  }

  logout() {
    this.authService.logOut();
  }

}
