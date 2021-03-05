import { Action } from "@ngrx/store";
import {  boozeHotelAdmin, CustomerDetails, RoomDetails } from "src/app/models/boozeApp-model";


// add Parent information
// ** types **
export const loggedInStatus = "[user] LoggedIn Status";
export const saveUser = "[user] Save user data";
export const saveCustomer = "[customer] Save customer data"
export const saveRoomDetails = '[room] Save room'
export const logout = 'logout'


export class updateUserLoggedInStatus implements Action {
  readonly type = loggedInStatus;
  constructor(public payload: boolean ) {}
}

export class saveUserData implements Action {
  readonly type = saveUser;
  constructor(public payload: boozeHotelAdmin ) {}
}


export class saveCustomerData implements Action{
  readonly type = saveCustomer;
  constructor(public payload: CustomerDetails[]){}
}

export class saveRoomData implements Action{
  readonly type = saveRoomDetails;
  constructor(public payload: RoomDetails[]){}
}


export class logoutAndClearStore implements Action{
  readonly type = logout;
  constructor (){}
}

export type boozeHotel  = updateUserLoggedInStatus | saveUserData | saveCustomerData | logoutAndClearStore | saveRoomData







