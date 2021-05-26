import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Skill} from '../Model/Skill';
import {ApiService} from '../Service/api.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Employee} from '../Model/employee';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {
  model: Skill = new Skill();
  allEmployeeDetails: Employee[];

  public skillForm: FormGroup = new FormGroup({
    skills: new FormControl('', Validators.required)
  });

  constructor(private  apiService: ApiService, private router: Router) { }

  ngOnInit(): void { }

  sendAddSkill(): void{
    if (this.skillForm.valid){
      this.model.skills = this.skillForm.value.skills;
      console.log(this.model);

      this.apiService.postSkill(this.model).subscribe(
        res => {
          location.reload();
        }, error => {
          alert('An error in Add Skill');
        }
      );
    }

  }

}
