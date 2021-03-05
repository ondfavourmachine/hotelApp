import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from '../chat.service';
import { RoomDetails } from '../models/boozeApp-model';
import {Store} from '@ngrx/store'
import * as fromStore from "../store";
import * as generalActions from "../store/actions/general.action";
import { pluck } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  createRoomForm: FormGroup;
  base64FormOfPicture: string| ArrayBuffer ;
  rooms: RoomDetails[] = [];
  services = new Set();
  constructor(
    private fb: FormBuilder,
    private chatService: ChatService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.createRoomForm = this.fb.group({
        type: '',
        cost: '',

    })

    this.chatService.getRoomsAvailable().subscribe(
      val => this.store.dispatch(new generalActions.saveRoomData(val as Array<RoomDetails>))
    )

    this.store.select(fromStore.getBoozeAppState)
    .pipe(pluck('rooms'))
    .subscribe(val => {this.rooms = []; this.rooms = [...val as RoomDetails[]] ; });
  }

  startRoomModal(){
    document.getElementById('launchRoomModal').click()
  }

  closeRoomModal(){
    document.getElementById('closeRoomModal').click()
  }

  addToServices(event){
    if(event.target.checked){
        this.services.add(event.target.defaultValue);
    }else{
      this.services.delete(event.target.defaultValue);
    }
    
  }

  savePicture(event){
  
        let reader: FileReader;
            if (FileReader) {
              reader = new FileReader();
              reader.onload = anevent => {
                this.base64FormOfPicture = anevent.target.result;
              };
              reader.readAsDataURL(event.target["files"][0]);
            }
  
    
  }


  createRoom(form: FormGroup){
    let objectToSubit = {};
     objectToSubit = { ...form.value};
     objectToSubit['services'] = [...this.services].join(',');
     objectToSubit['picture'] = this.base64FormOfPicture;
     objectToSubit['status'] = 'notTaken';
    this.chatService.updateRoomsAvailable(objectToSubit as RoomDetails)
    .subscribe(val => {
      const arr = [];
      arr.push(val);
      this.store.dispatch(new generalActions.saveRoomData(arr));
      this.createRoomForm.reset();
      this.closeRoomModal();
    })
  }

  viewRoomDetails(room: RoomDetails){
  
    this.chatService.sendRoomDetailsToListeningComp(room)
    this.router.navigate(['/view-rooms'])
  }

}
