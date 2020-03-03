import { Router,Event, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import { Component, OnInit, EventEmitter,Input,Output } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';
import { ConfigService } from './services/common/config.service'
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isCollapsed:Boolean = false;
  isLogin : String = 'notCheck' ;
  appMenu : any;
  userName: String = '';

  constructor(
    private router : Router,
    private http: HttpClient,
    private configservice:ConfigService
    ) {
      this.router.events.subscribe((event: Event) => {
        console.log(event);
    });

    }

  ngOnInit(){
    this.configservice.LoadCountryList();
    this.configservice.LoadGenderList();
  }
  
}
