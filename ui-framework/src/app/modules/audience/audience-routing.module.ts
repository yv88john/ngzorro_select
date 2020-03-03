import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudienceComponent } from './audience.component';
import { AudiencecreateComponent } from './audiencecreate/audiencecreate.component';

const routes: Routes = [
  { 
    path: '', 
    
    component: AudienceComponent,
    children:
    [
      {
        path:"",
        redirectTo:"create",
        pathMatch:"full",
      },
      {
        path:'create',
        component:AudiencecreateComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudienceRoutingModule { }
