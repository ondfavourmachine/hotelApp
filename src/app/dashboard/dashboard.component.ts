import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { pluck } from 'rxjs/operators';
import { ChatService } from '../chat.service';
import { CustomerDetails, RoomDetails } from '../models/boozeApp-model';
import * as fromStore from "../store";
import * as generalActions from "../store/actions/general.action";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 customers: CustomerDetails[];
  constructor(
    private store: Store, 
    private router: Router,
    private chatService: ChatService) { }

  ngOnInit(): void {
    this.store.select(fromStore.getBoozeAppState)
    .pipe(pluck('loggedInUserDetails'))
    .subscribe(val => console.log(val));

    this.chatService.loadCustomers().subscribe((val: CustomerDetails[]) => {
      this.customers = [...val]
      this.store.dispatch(new generalActions.saveCustomerData(this.customers))
    });
   
  }

  viewCustomer(customer:CustomerDetails){
    this.chatService.sendCustomerDetailsToListeningComp(customer);
    this.router.navigate(['/view-customer'])
  }

  
  logout(){
    this.store.dispatch(new generalActions.logoutAndClearStore());
    this.router.navigate(['/home'])
  }

}
