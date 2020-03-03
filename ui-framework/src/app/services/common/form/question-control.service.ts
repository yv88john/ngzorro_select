import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder, Form} from '@angular/forms';

import { QuestionBase } from '../../../common/form/question-base';

@Injectable()
export class QuestionControlService {
  constructor(private formBuilder: FormBuilder) { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      if(question.children && question.children.length >0)
      {
        group[question.key] = this.toFormGroup(question.children);
      }
      else
      {
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required): new FormControl(question.value || '');
      }
    });
    return new FormGroup(group);
  }
  appendFormGroup(question:QuestionBase<any>){
    let group : any = {};
    let control : any = {};

    if(question.children && question.children.length > 0 )
    {
      return this.toFormGroup(question.children);
    }
    else
    {
      control = question.required ? new FormControl(question.value || '', Validators.required): new FormControl(question.value || '');
      return control;
    }
  }
}