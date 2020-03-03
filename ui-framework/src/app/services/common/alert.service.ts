import { EventEmitter, Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertPopUp:EventEmitter<any> = new EventEmitter<true>();

  constructor() { }

  public showAlert(obj){
    this.alertPopUp.emit(obj);
  }
}
