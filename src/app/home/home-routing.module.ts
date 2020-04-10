import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeOneComponent } from './versions/home-one/home-one.component';

// Routes
// const routes: Routes = [
//   {
//     path: '',
//     component: HomeOneComponent,
//     data: {
//       title: 'Plazm Landing Page',
//       content: 'Demo1 | Theme with SSR Integration'
//     }
//   }
// ];



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'main',
        component: HomeOneComponent,
        data: {
          title: 'Introduction'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
