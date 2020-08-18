import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from '../app/pages/pages.component';
import { AppComponent } from '../app/app.component';
import { DisplayComponent } from '../app/display/display.component';
import { EditComponent } from '../app/edit/edit.component'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '', component: DisplayComponent
  },

  {
    path :'create/:id', component: PagesComponent
  },
  {
    path: 'edit/:id', component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
