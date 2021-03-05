import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { CustomerDetails } from '../models/boozeApp-model';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  aCustomer: Partial<CustomerDetails> = {}
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.viewCustomer$.subscribe(val => {

      this.aCustomer = {...val};
    }
      )
  }

}
