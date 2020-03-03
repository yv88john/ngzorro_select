import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { QuestionBase }     from '../../../common/form/question-base';

@Component({
  selector: 'app-audience-question',
  templateUrl: './audience-dynamic-question.component.html'
})
export class AudienceDynamicQuestionComponent {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;

  constructor(private cdr :ChangeDetectorRef){

  }
  get isValid() { return this.form.controls[this.question.key].valid; }

  updateUI(){
    this.cdr.detectChanges();
  }
}