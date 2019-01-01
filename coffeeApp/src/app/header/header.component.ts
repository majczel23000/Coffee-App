import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginService,
              private router: Router,
              public af: AngularFireAuth) { }

  ngOnInit() {
  }

  logoutUser() {
    this.af.auth.signOut();
    //localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
