import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people.component';

const routes: Routes = [
  {path:'',component:PeopleComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
  ],
  exports:[RouterModule],
  declarations: []
})
export class PeopleRoutingModule { }
