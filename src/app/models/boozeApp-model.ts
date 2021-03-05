export interface boozeHotelAdmin { id: number, email: string, password: string }

export interface CustomerDetails {

        id: number, fullname: string, phone: number | string,  email: string, roomBooked: string, amountPaid: PaidStatus, 
        checkedInStatus: checkedInStatus
          
}

export interface RoomDetails{
    cost: number
    id: string
    picture: string
    type: string
    services: string,
    status: 'taken' | 'reserved' | 'notTaken'
}

export type PaidStatus = 'paid' | 'notPaid';
export type checkedInStatus = "checkedIn" | 'notCheckIn' | 'Reserved';