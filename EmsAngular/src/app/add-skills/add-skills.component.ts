import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddSkill} from '../Model/addSkill';
import {ApiService} from '../Service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {
  model: AddSkill = new AddSkill();

  public skillForm: FormGroup = new FormGroup({
    // id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    skills: new FormControl('', Validators.required),
    check: new FormControl('', Validators.required)
  });

  constructor(private  apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  sendAddSkill(): void{
    if (this.skillForm.valid){
      this.model.id = 0;
      this.model.name = this.skillForm.value.name;
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
