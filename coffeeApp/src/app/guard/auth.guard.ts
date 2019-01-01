import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router, private auth: AngularFireAuth) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log("Current User: " + firebase.auth().currentUser);
      // if(firebase.auth().currentUser !== null){
      //   return true;
      // } else {
      //   this.router.navigate(['/login']);
      //   return false;
      // }
      if(state.url === '/dashboard/order' || state.url === '/dashboard/statistics'){
        if(firebase.auth().currentUser === null){
          this.router.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      } else if (state.url === '/login' || state.url === '/register'){
        if(firebase.auth().currentUser !== null){
          this.router.navigate(['/dashboard/order']);
          return false;
        } else {
          return true;
        }
      } else {
        if(firebase.auth().currentUser === null){
          this.router.navigate(['/login']);
          return false;
        } else {
          this.router.navigate(['/dashboard/order']);
          return false;
        }
      }
      
    
  }
}
