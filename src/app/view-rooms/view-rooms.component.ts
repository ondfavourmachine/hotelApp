import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { RoomDetails } from '../models/boozeApp-model';

@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.css']
})
export class ViewRoomsComponent implements OnInit {
  aRoom: Partial<RoomDetails> = {}
  constructor(private chatService: ChatService) { }
 

  ngOnInit(): void {
    this.chatService.viewRoom$.subscribe(val => {
      this.aRoom = {...val};
    }
      )
  }

}
