import { Component, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AudienceDynamicFormComponent } from '../audience-dynamic-form/audience-dynamic-form.component';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { QuestionBase } from '../../../common/form/question-base';
import { QuestionControlService }    from '../../../services/common/form/question-control.service';
import { ConfigService } from '../../../services/common/config.service';

@Component({
  selector: 'app-audiencecreate',
  templateUrl: './audiencecreate.component.html',
})
export class AudiencecreateComponent implements OnInit {

  questions: QuestionBase<any>[] = [];
  form:FormGroup ; 

  constructor(private qcs: QuestionControlService,private configservice:ConfigService) {

    this.questions = [new QuestionBase<string>({
      controlType:'textbox',
      key: 'audiencename',
      label: 'Audience Name',
      value: '',
      required: true,
      order: 1
    }),
  ];
  
  this.form = this.qcs.toFormGroup(this.questions);
  
  }

  ngOnInit() {

  }
}
