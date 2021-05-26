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

  editEmp(emp: Employee) {
    
  }

  deleteEmployee(id: number) {
    
  }
}
