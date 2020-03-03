import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AudienceRoutingModule } from './audience-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

import { AudienceComponent } from './audience.component';
import { AudienceDynamicFormComponent } from './audience-dynamic-form/audience-dynamic-form.component';
import { AudienceDynamicQuestionComponent } from './audience-dynamic-question/audience-dynamic-question.component';
import { AudiencecreateComponent } from './audiencecreate/audiencecreate.component';

import { QuestionControlService }    from '../../services/common/form/question-control.service';


@NgModule({
  declarations: [AudienceComponent, AudienceDynamicFormComponent, AudienceDynamicQuestionComponent, AudiencecreateComponent],
  imports: [
    CommonModule,
    AudienceRoutingModule,
    NgZorroAntdModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NzTableModule,
    NzRateModule,
    NzBadgeModule
  ],
  providers:[QuestionControlService]
})
export class AudienceModule { }
