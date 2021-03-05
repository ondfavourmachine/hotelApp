

import { boozeHotelAdmin, CustomerDetails, RoomDetails } from "src/app/models/boozeApp-model";
import * as generalActions from "../actions/general.action";
  
  // interface for state
  export interface boozeHotelAppDetails {
    loggedInUserStatus: boolean,
    loggedInUserDetails: Partial<boozeHotelAdmin>,
    rooms: Array<RoomDetails>,
    customers: Array<CustomerDetails>
  }
  
  // Application state
  export const initialState: boozeHotelAppDetails = {
    loggedInUserStatus: false,
    loggedInUserDetails: {},
    rooms : [],
    customers: []
  };
  
  export function reducer(
    state = initialState,
    action: generalActions.boozeHotel
  ): boozeHotelAppDetails {
    switch (action.type) {
      case generalActions.loggedInStatus: {
        // console.log(action.payload);
        return {
          ...state,
          loggedInUserStatus: action.payload
        };
      }

      case generalActions.saveUser: {
        // console.log(action.payload);
        return {
          ...state,
          loggedInUserDetails: {...action.payload}
        };
      }

      case generalActions.saveCustomer: {
      
        return {
          ...state,
          customers: [...state.customers, ...action.payload]
        };
      }

      case generalActions.saveRoomDetails: {
      
        return {
          ...state,
          rooms: [...state.rooms, ...action.payload]
        };
      }
      

      case generalActions.logout: {
        // console.log(action.payload);
        const store = {...state};
        store.customers = [];
        store.loggedInUserStatus = false;
        store.loggedInUserDetails = {},
        store.rooms = [];

        return store;
      }
      
     
      
      
    }
  
    return state;
  }
  