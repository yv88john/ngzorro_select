import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../../common/form/question-base';
import { ConfigService } from '../../services/common/config.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
})
export class AudienceComponent implements OnInit {

  questions$:QuestionBase<string>[] = 
  [
    new QuestionBase<string>({
      controlType:'textbox',
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1
    }),
    new QuestionBase<string>({
      controlType:'textbox',
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 2
    }),
    
  ];

  _= _;

  constructor(public configservice : ConfigService) {

   }

  ngOnInit() {
  }

}
