import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';

const routes: Routes = [
  {path:'',component:InfoComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
  ],
  exports:[RouterModule],
  declarations: []
})
export class InfoRoutingModule { }
