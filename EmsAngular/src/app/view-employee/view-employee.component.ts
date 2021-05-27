import { Component, OnInit } from '@angular/core';
import {ApiService} from '../Service/api.service';
import {Employee} from '../Model/employee';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


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
  getDocumentDefinition() {
    // ...
    return {
      content: [
        // ...
        {
          text: 'Employee details',
          style: 'header'
        },
        this.getExperienceObject(this.employees)

      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        name: {
          fontSize: 16,
          bold: true
        },
        jobTitle: {
          fontSize: 14,
          bold: true,
          italics: true
        },
        tableHeader: {
          bold: true,
        }
      }
    };
  }

  // tslint:disable-next-line:typedef
  getExperienceObject(employees: Employee[]) {
    const exs = [];
    employees.forEach(employee => {
      exs.push(
        [{
          columns: [
            [{
              text: employee.name,
              style: 'jobTitle'
            },
              {
                text: employee.dob,
              },
              {
                text: employee.id,
              }]
          ]
        }]
      );
    });

    return {
      table: {
        widths: ['*'],
        body: [
          ...exs
        ]
      }
    };
  }


  // tslint:disable-next-line:typedef
  generatePdf(){
    const documentDefinition4 = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition4).open();
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
