import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {AddSkillsComponent} from './add-skills/add-skills.component';

const routes: Routes = [
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'add-skills', component: AddSkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
