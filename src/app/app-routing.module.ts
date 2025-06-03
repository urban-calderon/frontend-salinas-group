import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home/home.component';
import { EncryptPage } from './pages/encrypt/encrypt.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'encrypt',
    component: EncryptPage
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
