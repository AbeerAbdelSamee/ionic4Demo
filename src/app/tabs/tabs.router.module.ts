import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'test',
        children: [
          {
            path: '',
            loadChildren: '../test/test.module#TestPageModule'
          }
        ]
      },
      {
        path: 'test2',
        children: [
          {
            path: '',
            loadChildren: '../test2/test2.module#Test2PageModule'
          }
        ]
      },
      {
        path: 'test3',
        children: [
          {
            path: '',
            loadChildren: '../test3/test3.module#Test3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/test',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/test',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
