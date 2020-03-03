
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  rbacObj:any;
  countryList:any;
  genderList:any;

  constructor(
    private http:HttpClient) {

     }

  LoadCountryList()
  {
      this.countryList = [{"CODE":"HKG","DESCRIPTION":"Hong Kong","STATUS":"Active"},{"CODE":"PHL","DESCRIPTION":"Philippines","STATUS":"Active"},{"CODE":"IRL","DESCRIPTION":"Ireland","STATUS":"Active"}];
  }

  LoadGenderList()
  {
    this.genderList = [{"CODE":"M","DESCRIPTION":"Male"},{"CODE":"F","DESCRIPTION":"Female"}];
  }

}
