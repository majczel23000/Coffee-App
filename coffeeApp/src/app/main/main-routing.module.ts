import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { AuthGuard } from '../guard/auth.guard';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'order',
    pathMatch: 'full',
    // canActivate: [AuthGuard]
  },
  {
    path: 'order',
    component: OrderComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
