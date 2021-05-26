import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  edit = false;
  @Input() employee: Employee;
  @Output() backToView: EventEmitter<any> = new EventEmitter();

  model: Employee = new Employee();
  public employeeForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  constructor(private  apiService: ApiService, private router: Router) { }

  ngOnInit(): void {

    if (this.employee != null){
      this.edit = true;
      this.employeeForm.controls.name.setValue(this.employee.name);
      this.employeeForm.controls.email.setValue(this.employee.email);
      this.employeeForm.controls.dob.setValue(this.employee.dob);
    }

  }

  onUpdate(): void{
    this.model.id = this.employee.id;
    this.model.name = this.employeeForm.value.name;
    this.model.dob = this.employeeForm.value.dob;
    this.model.email = this.employeeForm.value.email;

    this.apiService.updateEmployee(this.model).subscribe(
      res => {
        this.backToView.emit();
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


  cancel(): void {
    this.backToView.emit();
  }
}
