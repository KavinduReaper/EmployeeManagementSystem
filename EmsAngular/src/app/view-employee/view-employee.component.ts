import { Component, OnInit } from '@angular/core';
import {ApiService} from '../Service/api.service';
import {Employee} from '../Model/employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employees: Employee[];
  edit = false;
  employee: Employee;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  // tslint:disable-next-line:typedef
  public getAllEmployee(){
    this.apiService.getAllEmployee().subscribe(
      res => {
        this.employees = res;
      }, error => {
        alert('Error in getting Employees');
      }
    );
  }

  // tslint:disable-next-line:typedef
  editEmp(emp: Employee) {
    this.employee = emp;
    this.edit = true;
  }

  // tslint:disable-next-line:typedef
  deleteEmployee(id: number) {
    this.apiService.deleteEmployee(id).subscribe(
      res => {
        if (res){
          alert('Delete Successfully');
        }else{
          alert('Error in Delete');
        }
      }, error => {
        alert('Error in Server');
      }
    );
  }


  // tslint:disable-next-line:typedef
  backToView($event: any) {
    this.edit = false;
    this.ngOnInit();
  }
}
