import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'', 
    redirectTo:"audience",
    pathMatch: 'full'
  },
  { 
    path: 'audience', 
    loadChildren: () => import('./modules/audience/audience.module').then(m => m.AudienceModule),
  },
  {
    path:'**',
    redirectTo:'audience',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, 
      {
        enableTracing: true
      }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
  