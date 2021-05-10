import { Component, OnInit } from '@angular/core';
import {Employee} from '../Model/employee';
import {ApiService} from '../Service/api.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {

  skillsArr: number[] = [];
  skillTemp: string[] = [];
  mapSkill = new Map();
  btnVisibility = true;

  model: Employee = new Employee();
  public employeeForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  constructor(private  apiService: ApiService, private router: Router) { }

  ngOnInit(): void {

  }

  onUpdate(): void{
    this.apiService.updateEmployee(this.model, this.model.id).subscribe(
      res => {
        this.router.navigate(['view']);
      },
      err => {
        alert('An error occurred in Updating Employee');
      }
    );
  }

  // CREATE NEW EMPLOYEE
  sendAdd(): void {
    // alert(this.model.dob);
    if (this.employeeForm.valid){
      this.model.id = 0;
      this.model.name = this.employeeForm.value.name;
      this.model.dob = this.employeeForm.value.dob;
      this.model.email = this.employeeForm.value.email;
      console.log('dhfs');
      this.apiService.postEmployee(this.model).subscribe(
        res => {
          console.log(res);
          location.reload();
        },
        err => {
          alert('An error in Adding Employee');
        }
      );
    }
  }


  }
