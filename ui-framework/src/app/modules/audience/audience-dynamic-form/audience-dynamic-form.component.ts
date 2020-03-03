import { Component, Input, OnInit , ChangeDetectorRef  }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../../../common/form/question-base';
import { QuestionControlService }    from '../../../services/common/form/question-control.service';
import { ConfigService } from '../../../services/common/config.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-audience-form',
  templateUrl: './audience-dynamic-form.component.html',
})
export class AudienceDynamicFormComponent implements OnInit {

  listOfAttribute : Array<any>;
  selectedAttribute : Array<any>;


  @Input() questions: QuestionBase<any>[] = [];
  @Input() form:FormGroup ; 


  payLoad = '';

  constructor(private qcs: QuestionControlService,private configservice:ConfigService, private changeDetectorRef: ChangeDetectorRef) {  }

  ngOnInit() {

    this.listOfAttribute = [
      {label:'Gender',value:'gender'},
      {label:'Country',value:'country'},
      {label:'Member',value:'member'},
      {label:'Age',value:'age'},
    ];



  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  generateQuestionBaseByKey($e):QuestionBase<any>{
    switch($e){
      case "gender":
        return new QuestionBase<any>({
        controlType:'SelectMultiple',
        key: 'gender',
        label: 'Gender',
        value: '',
        required: true,
        order: 2,
        options: this.configservice.genderList.map(x=>{return {'key':x['CODE'] + ' - '+ x['DESCRIPTION'],'value':x['CODE']} ;})
      });
        break;
      case "country":
        return new QuestionBase<any>({
          controlType:'SelectMultiple',
          key: 'country',
          label: 'Countries',
          value: '',
          required: true,
          order: 2,
          options: this.configservice.countryList.map(x=>{return {'key':x['CODE'] + ' - '+ x['DESCRIPTION'],'value':x['CODE']} ;})
        });
        break;
      case "member":
        return new QuestionBase<any>({
          controlType:'SelectMultiple',
          key: 'member',
          label: 'Member',
          value: '',
          required: true,
          order: 2,
          options:
          [
            {key:"Registered",value:"register"},
            {key:"Not Registered",value:"not-register"}
          ]
        });
        break;
      case "age":
        return  new QuestionBase<any>({
          controlType:'Age',
          key:'age',
          label:'Age',
          value:null,
          order:3,
          children:[
              new QuestionBase<Array<number>>({
                key:'ageslide',
                value:[30,50],
              }),
              new QuestionBase<any>({
                key:'ageswitch',
                label:'Include',
                value:true,
              })
          ]
        });
        break;
    }
  }

  removeQuestionByKey($e){
     let q  = this.questions.filter(x=>!(x['key']==$e));
     this.questions = q ;
  }

  OnItemSelected($event)
  {
    let self= this;
    const questionArray = self.questions.map(x=> x['key']).filter(x=>!(x=="audiencename") );
    const selectedArray = $event;
    const xorArray = _.xor(questionArray,selectedArray);
    if(xorArray && xorArray.length>0){
      xorArray.forEach(x=>{
        if(!_.includes(selectedArray,x))
        {
          self.removeQuestionByKey(x);
          this.form.removeControl(x);
        }
        if(!_.includes(questionArray,x))
        {
          const questionItem = self.generateQuestionBaseByKey(x); 
          self.questions.push(questionItem);
          this.form.addControl(x,self.qcs.appendFormGroup(questionItem));
        }
      });
    }
    this.changeDetectorRef.detectChanges();
  }

  getCountryDesc(code){
    return this.configservice.countryList.filter(x=>(x['CODE']==code))[0]['DESCRIPTION'];
  }

  getGenderDesc(code){
    return this.configservice.genderList.filter(x=>(x['CODE']==code))[0]['DESCRIPTION'];
  }

  test(){
    debugger;
    console.log();
  }
}