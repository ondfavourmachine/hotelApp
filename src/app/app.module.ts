import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { reducers } from "./store";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavComponent } from './nav/nav.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ViewRoomsComponent } from './view-rooms/view-rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    SidenavComponent,
    NavComponent,
    ViewCustomerComponent,
    RoomsComponent,
    ViewRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      manageBoozeApp: reducers.boozeApp,
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
