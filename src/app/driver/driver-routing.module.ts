import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverPage } from './driver.page';

const routes: Routes = [
  {
    path: 'driver',
    component: DriverPage,
    children: [
      {
        path: 'tab4',
        loadChildren: '../tab4/tab4.module#Tab4PageModule'
      },
      {
        path: 'tab5',
        loadChildren:'../tab5/tab5.module#Tab5PageModule'
      },
      {
        path: 'tab6',
        loadChildren: '../tab6/tab6.module#Tab6PageModule'
      },
      {
        path: '',
        redirectTo: '/driver/tab4',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverPageRoutingModule {}
