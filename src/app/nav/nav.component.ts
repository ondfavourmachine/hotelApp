import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

import * as generalActions from "../store/actions/general.action";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }


  logout(){
    this.store.dispatch(new generalActions.logoutAndClearStore());
    this.router.navigate(['/home'])
  }
}
