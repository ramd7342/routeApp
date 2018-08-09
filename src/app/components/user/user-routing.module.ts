import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InfoComponent } from './info/info.component';
import { PeopleComponent } from './people/people.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path:'',component:UserComponent,
    children: [
      {
          path: '',
          redirectTo:'info',
          pathMatch: 'full'
      },
      {
        path:'info',
        loadChildren:'app/components/user/info/info.module#InfoModule'
      },
      { path: 'people',
         loadChildren:'app/components/user/people/people.module#PeopleModule',
      }
  ]
  },
  // { path: 'info',
  //   loadChildren:'app/components/user/info/info.module#InfoModule',
  //   //  component: InfoComponent
  //     },
  //     { path: 'people',
  //       loadChildren:'app/components/user/people/people.module#PeopleModule',
  //     //component: PeopleComponent
  //     }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
  ],
  exports:[RouterModule],
  declarations: []
})
export class UserRoutingModule { }
