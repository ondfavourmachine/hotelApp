import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { pluck } from 'rxjs/operators';
import { ChatService } from '../chat.service';
import { CustomerDetails } from '../models/boozeApp-model';
import * as fromStore from "../store";
import * as generalActions from "../store/actions/general.action";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 customers: CustomerDetails[] = [];
 customerForm: FormGroup
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
    private chatService: ChatService

  ) { }

  ngOnInit(): void {
   this.customerForm = this.fb.group({
     email: ['', Validators.required],
     phone: ['', Validators.required],
     checkInStatus: ['', Validators.required],
     amountPaid: ['', Validators.required],
     fullname: ['', Validators.required],
     roomBooked: ['', Validators.required]
   })
    this.store.select(fromStore.getBoozeAppState)
    .pipe(pluck('customers'))
    .subscribe(val => this.customers = [...val as CustomerDetails[]]);
  }


  triggerCreateCustomerModal(){
    document.getElementById('launchTheModal').click();
  }

  closeCreateCustomerModal(){
    document.getElementById('closeCustomerModal').click();
  }

  createCustomer(form: FormGroup){
    this.chatService.updateCustomers(form.value).subscribe(val => {
      const arr = [];
      arr.push(val);
      this.store.dispatch(new generalActions.saveCustomerData(arr));
      this.closeCreateCustomerModal();
    });
  }

  viewCustomer(customer:CustomerDetails){
    this.chatService.sendCustomerDetailsToListeningComp(customer);
    this.router.navigate(['/view-customer'])
  }
}
