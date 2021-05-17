import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {AddSkillsComponent} from './add-skills/add-skills.component';
import {ReportViewComponent} from './report-view/report-view.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'add-skills', component: AddSkillsComponent},
  {path: 'view-report', component: ReportViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
