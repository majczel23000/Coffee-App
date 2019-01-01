import { Injectable } from '@angular/core';
import { Order } from '../../data/Order';
import { Observable } from '../../../../node_modules/rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) {
  }

  getOrders(){
    return <any>this.http.get('http://localhost:3000/orders');
  }
}
