import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../chat.service';
import { Store } from "@ngrx/store";

import * as generalActions from "../store/actions/general.action";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  error: boolean = false;
  errorMessage: string
  success: true;
  constructor(private chatService: ChatService, 
    private fb: FormBuilder,
    private store: Store,
    private router: Router
    ) { }

  ngOnInit(): void {
   this.loginForm = this.fb.group({
     email: ['', Validators.required],
     password: ['', Validators.required]
   })
      // 
  }


  submitForm(form: FormGroup){
    const obj = {...form.value};
  
    this.chatService.logUserIn(obj)
    .subscribe(val => {
      if(val == 'No user found'){
        this.error = true;
        this.errorMessage = val;
        setTimeout(() => {
          this.error = false;
          this.errorMessage = '';
          }, 2000);  
        }

        else{
        
          this.store.dispatch(new generalActions.updateUserLoggedInStatus(true));
          this.store.dispatch(new generalActions.saveUserData(val))
          this.router.navigate(['/dashboard'])
        }
    },
   )
  }

}
