import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AddstudentComponent} from './addstudent/addstudent.component'
import {UpdateComponent} from './update/update.component'
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'student', component:AddstudentComponent},

  {path:'student/:id', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
