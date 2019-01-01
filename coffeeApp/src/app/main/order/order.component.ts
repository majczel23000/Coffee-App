import { Component, OnInit } from '@angular/core';
import { coffees } from '../../data/coffee';
import { kitchens } from '../../data/kitchens';
import { AngularFireAuth } from 'angularfire2/auth';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public coffees: any[] = coffees;
  public kitchens: any[] = kitchens;
  private selectedCoffes: any[] = new Array();
  public totalPrice: number = 0;
  public selectedKitchen: number = -1;
  name: any;

  constructor(public af: AngularFireAuth,
              private orderService: OrderService) { 
  }

  ngOnInit() {
  }

  collectCoffee(index: number, price: number): void{
    const element = document.getElementById('coffeeElement'+index);
    if(element.classList.contains('list-group-item-primary')){
      element.classList.remove('list-group-item-primary');
      this.totalPrice -= price;
      this.deleteCoffee(coffees[index].name);
    } else{
      element.classList.add('list-group-item-primary');
      this.totalPrice += price;
      if(!this.alreadyContains(coffees[index].name)){
        this.selectedCoffes.push(coffees[index]);
      }
    }
  }

  alreadyContains(coffeeName): boolean{
    for(let i = 0; i < this.selectedCoffes.length; i++){
      if(this.selectedCoffes[i].name === coffeeName){
        return true;
      }
    };
    return false;
  }

  deleteCoffee(coffeeName){
    for(let i = 0; i < this.selectedCoffes.length; i++){
      if(this.selectedCoffes[i].name === coffeeName){
        this.selectedCoffes.splice(i,1);
      }
    };
  }

  selectKitchen(index: number){
    this.selectedKitchen = index;
  }

  makeAnOrder(){
    if(this.totalPrice > 0 && this.selectedKitchen !== -1){
      console.log()
      this.orderService.makeAnOrder(this.selectedCoffes, this.kitchens[this.selectedKitchen].name);
      this.clearList();
    }
  }

  clearList(){
    this.selectedCoffes = [];
    this.selectedKitchen = -1;
    this.totalPrice = 0;
    for(let i = 0; i < this.coffees.length; i++) {
      document.getElementById('coffeeElement'+i).classList.remove('list-group-item-primary');
    }
  }

}
