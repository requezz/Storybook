import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPageComponent} from "./first-page/first-page.component";
import {SecondPageComponent} from "./second-page/second-page.component";
import {ThirdPageComponent} from "./third-page/third-page.component";


const routes: Routes = [
  {
    component: FirstPageComponent,
    path: '',
  },

  {
    component: SecondPageComponent,
    path: 'second',
  },

  {
    component: ThirdPageComponent,
    path: 'third',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
