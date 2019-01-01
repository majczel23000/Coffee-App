import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable } from '../../../../node_modules/rxjs';
import { User } from '../../data/User';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  usersCollection: AngularFirestoreCollection<User>;

  constructor(private http: HttpClient,
              public af: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) { 
                this.usersCollection = this.afs.collection('users');
              }

  registerUser(userData: any, user: User){
    this.af.auth.createUserWithEmailAndPassword(
      userData.username+'@coffeeapp.com',
      userData.password
    ).then(
      (success) => {
        this.http.post('http://localhost:3000/users', user).subscribe(
          res => {
            alert("Successfully registered user");
          },
          err => {
            console.log("Error while registering user");
          }
        )
        this.router.navigate(['/dashboard/order']);
      }).catch(
        (err) => {
          console.log(err);
        }
      )
  }

}
