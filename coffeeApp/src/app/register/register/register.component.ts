import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { RegisterService } from './register.service';
import { User } from '../../data/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    username: ''
  }

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              public af: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private registerService: RegisterService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      firstName: new FormControl('',[
        Validators.required
      ]),
      lastName: new FormControl('',[
        Validators.required
      ])
    });
  }

  get f() { 
    return this.registerForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const userData = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName
    }

    this.user.firstName = userData.firstName;
    this.user.lastName = userData.lastName;
    this.user.username = userData.username;

    this.registerService.registerUser(userData, this.user);
    
  }
}
