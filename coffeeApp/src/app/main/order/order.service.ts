import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Order } from '../../data/Order';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Order = {
    kitchen: '',
    coffee: '',
    user: '',
    date: ''
  };

  orderCollection: AngularFirestoreCollection<Order>;

  constructor(private http: HttpClient,
              public af: AngularFireAuth,
              private afs: AngularFirestore) { 
                this.orderCollection = this.afs.collection('orders');
              }

  makeAnOrder(selectedCoffes: any[], selectedKitchen: string){
    let rightNow = new Date();
    let rightNowFormatted = rightNow.toISOString().substring(0, 10);
    const ordersToSend = {
      kitchen: selectedKitchen,
      user: this.af.auth.currentUser.email.split('@')[0],
      date: rightNowFormatted,
      selectedCoffes: selectedCoffes,
      length: selectedCoffes.length
    }
    this.order.kitchen = selectedKitchen;
    this.order.user = this.af.auth.currentUser.email.split('@')[0];
    this.http.post('http://localhost:3000/orders', ordersToSend).subscribe(
      res => {
        alert("Successfully make an order");
      },
      err => {
        console.log("Error while making an order");
      }
    )
    // for (let i = 0; i < selectedCoffes.length; i++) {
    //   this.order.coffee = selectedCoffes[i].name;
    //   this.order.date = rightNowFormatted;
    //   this.orderCollection.add(this.order);
      
    // }
  }
}

