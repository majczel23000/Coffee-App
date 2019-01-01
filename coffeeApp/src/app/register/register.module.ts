import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDPume-Zn_4HUm10rQSmsGld3Ure2h6nDU",
  authDomain: "coffeeapp-mr.firebaseapp.com",
  databaseURL: "https://coffeeapp-mr.firebaseio.com",
  projectId: "coffeeapp-mr",
  storageBucket: "coffeeapp-mr.appspot.com",
  messagingSenderId: "888855459317"
};

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
