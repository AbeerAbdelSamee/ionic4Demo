import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPage } from './test/test.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'items-modal', loadChildren: './pages/items-modal/items-modal.module#ItemsModalPageModule' },
  // { path: 'test/:id', loadChildren: './test/test.module#TestPageModule' },
  // { path: 'test2', loadChildren: './test2/test2.module#Test2PageModule' },
  // { path: 'test3', loadChildren: './test3/test3.module#Test3PageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'test4', loadChildren: './test4/test4.module#Test4PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
