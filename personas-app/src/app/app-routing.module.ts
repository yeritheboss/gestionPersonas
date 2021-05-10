import { PersonasComponent } from './personas /personas.component';



import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';



const routes: Routes = [
  {path: '', component: PersonasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule{}
