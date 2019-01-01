import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

export const firebaseConfig = {
  apiKey: "AIzaSyDPume-Zn_4HUm10rQSmsGld3Ure2h6nDU",
  authDomain: "coffeeapp-mr.firebaseapp.com",
  databaseURL: "https://coffeeapp-mr.firebaseio.com",
  projectId: "coffeeapp-mr",
  storageBucket: "coffeeapp-mr.appspot.com",
  messagingSenderId: "888855459317"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
