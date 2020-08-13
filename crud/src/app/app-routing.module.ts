import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from '../app/pages/pages.component';
import { AppComponent } from '../app/app.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: 'user', component: AppComponent
  },
  {
    path :'create/:id', component: PagesComponent
  },
  {
    path: 'edit/:id', component: PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
