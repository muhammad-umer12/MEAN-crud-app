import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AddstudentComponent} from './addstudent/addstudent.component'

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'student', component:AddstudentComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
