import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { OrderComponent } from './order/order.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [OrderComponent, StatisticsComponent]
})
export class MainModule { }
