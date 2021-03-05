import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, filter, map } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { CustomerDetails, RoomDetails } from './models/boozeApp-model';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private broadCastCustomer = new BehaviorSubject({});
  public viewCustomer$ = this.broadCastCustomer.asObservable();

  private broadCastRoom = new BehaviorSubject({});
  public viewRoom$ = this.broadCastRoom.asObservable()
  url = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }

  logUserIn(obj: {email: string, password: string} ){
    return this.http.get(`${this.url}users`).pipe(map((val: any[]) => {
      const found = val.find(element => (element.email == obj.email && element.password == obj.password))
     if(found){
       return found;
     }
     throw 'No user found'
    }), catchError(err => of('No user found')))
}

  sendCustomerDetailsToListeningComp(CustomerDetails: CustomerDetails){
    this.broadCastCustomer.next(CustomerDetails);
  }

  sendRoomDetailsToListeningComp(room: RoomDetails){
    this.broadCastRoom.next(room);
  }
  loadCustomers(){
    return this.http.get(`${this.url}customers`);
  }

  updateCustomers(obj: CustomerDetails){
    return this.http.post(`${this.url}customers`, obj)
  }

  updateRoomsAvailable(obj: RoomDetails){
    return this.http.post(`${this.url}roomsAvailable`, obj)
  }

  getRoomsAvailable(){
    return this.http.get(`${this.url}roomsAvailable`)
  }

}
