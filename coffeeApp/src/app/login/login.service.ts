import { Injectable } from '@angular/core';
import { User } from './User';
import { coffees } from '../data/coffee';
import { Router } from '@angular/router';
import { first, tap } from 'rxjs/operators';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  loginUser(userData: User){
    // mock login service
    if(userData.username === 'admin' && userData.password === 'admin'){
      console.log('correct');
      localStorage.setItem('token', '123456');
      this.router.navigate(['/dashboard/order']);
    }
  }

  isUserLogged(){
    return firebase.auth().currentUser;
  }

}
