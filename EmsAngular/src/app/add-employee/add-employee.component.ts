import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from '../Model/employee';
import {ApiService} from '../Service/api.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ViewEmployeeComponent} from '../view-employee/view-employee.component';
import {Skill} from '../Model/Skill';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
  skillsArr: number[] = [];
  skillTemp: string[] = [];
  skills: Skill[] = [];
  selectedSkills: Skill[] = [];
  mapSkill = new Map();
  edit = false;
  @Input() employee: Employee;
  @Output() backToView: EventEmitter<any> = new EventEmitter();

  model: Employee = new Employee();
  public employeeForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  constructor(private  apiService: ApiService, private router: Router) {
    this.getAllSkills();
    // tslint:disable-next-line:triple-equals
    if ( localStorage.getItem('isLogin') == 'false' || localStorage.getItem('isLogin') == null){
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
  }

  onUpdate(): void{
    this.model.id = this.employee.id;
    this.model.name = this.employeeForm.value.name;
    this.model.dob = this.employeeForm.value.dob;
    this.model.email = this.employeeForm.value.email;
    for ( const val of this.selectedSkills){
      this.model.skills.push(val.id);
    }

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

      // tslint:disable-next-line:prefer-const
      for ( let val of this.selectedSkills){
          this.model.skills.push(val.id);
      }

      this.apiService.postEmployee(this.model).subscribe(
        res => {
          this.router.navigate(['view-employee']);
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

  // tslint:disable-next-line:typedef
  public getAllSkills(){
    this.apiService.getAllSkills().subscribe(
      res => {
        this.skills = res;
        if (this.employee != null){
          this.edit = true;
          this.employeeForm.controls.name.setValue(this.employee.name);
          this.employeeForm.controls.email.setValue(this.employee.email);
          this.employeeForm.controls.dob.setValue(this.employee.dob);
          this.selectedSkills = [];
          console.log(this.employee);
          console.log(this.skills);
          for ( const val of this.skills){
            if ( this.employee.skills.includes(val.id)){
              this.selectedSkills.push(val);
            }
          }
          for ( const  val of this.selectedSkills){
            this.skills.splice(this.skills.indexOf(val), 1);
          }

        }
      }, error => {
        alert('Error showing skills');
      }
    );
  }

  // tslint:disable-next-line:typedef
  addSkills(skill: Skill) {
    this.selectedSkills.push(skill);
    const index: number = this.skills.indexOf(skill);
    this.skills.splice(index, 1);
  }

  // tslint:disable-next-line:typedef
  deleteSkills(skill: Skill) {
    const index: number = this.selectedSkills.indexOf(skill);
    this.selectedSkills.splice(index, 1);
    this.skills.push(skill);
  }
}
