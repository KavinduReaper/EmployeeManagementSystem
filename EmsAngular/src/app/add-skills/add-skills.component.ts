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
  allSkills: Skill[];

  public skillForm: FormGroup = new FormGroup({
    skills: new FormControl('', Validators.required)
  });

  constructor(private  apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAllSkills();
  }

  // tslint:disable-next-line:typedef
  public getAllSkills(){
    this.apiService.getAllSkills().subscribe(
      res => {
        this.allSkills = res;
        console.log(this.allSkills);
      }, error => {
        alert('Error showing skills');
      }
    );
  }

  // tslint:disable-next-line:typedef
  deleteSkill(id: number){
    this.apiService.deleteSkill(id).subscribe(
      res => {
        if (!res){
          location.reload();
        }else{
          alert('Delete not Succeed');
        }
      }, error => {
        alert('Error in Server');
      }
    );
  }

  // tslint:disable-next-line:typedef
  updateSkill(skill: Skill){
    this.apiService.updateSkill(skill).subscribe(
      res => {
        if (res){
          alert('alert 1');
        }
        else{
          alert('alert2');
        }
      }, error => {
        alert('Error in Server');
      }
    );
  }

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
