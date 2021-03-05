import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
import { UsersComponent } from './users/users.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { ViewRoomsComponent } from './view-rooms/view-rooms.component';

const routes: Routes = [
 
  {path: '', component: LoginComponent },
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customers', component: UsersComponent},
  {path: 'view-customer', component: ViewCustomerComponent },
  {path: 'rooms', component: RoomsComponent },
  {path: 'view-rooms', component: ViewRoomsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
