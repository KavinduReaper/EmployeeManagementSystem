import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Skill} from '../Model/Skill';
import {ApiService} from '../Service/api.service';
import {Router} from '@angular/router';
import {Employee} from '../Model/employee';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {
  model: Skill = new Skill();
  model1: Skill = new Skill();
  allSkills: Skill[];

  edit = false;
  @Input() skill: Skill;
  @Output() backToView: EventEmitter<any> = new EventEmitter();

  public skillForm: FormGroup = new FormGroup({
    skills: new FormControl('', Validators.required)
  });

  constructor(private  apiService: ApiService, private router: Router) {
    // tslint:disable-next-line:triple-equals
    if ( localStorage.getItem('isLogin') == 'false' || localStorage.getItem('isLogin') == null) {
      this.router.navigate(['login']);
    }
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getAllSkills();
    if (this.skill != null){
      this.edit = true;
      this.skillForm.controls.skills.setValue(this.skill.skills);
    }
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

  onUpdate(): void{
    this.model1.id = this.skill.id;
    this.model1.skills = this.skillForm.value.skills;
    this.apiService.updateSkill(this.model1).subscribe(
      res => {
        this.edit = false;
        this.allSkills = res;
        this.skillForm.controls.skills.setValue('');
      },
      err => {
        alert('An error occurred in Updating Skill');
      }
    );
  }

  cancel(): void {
    this.edit = false;
    this.skillForm.reset();
  }
  // tslint:disable-next-line:typedef
  editSkill(skill: Skill) {
    this.skillForm.controls.skills.setValue(skill.skills);
    this.skill = skill;
    this.edit = true;
  }

  sendAddSkill(): void{
    if (this.skillForm.valid){
      this.model.skills = this.skillForm.value.skills;
      console.log(this.model);

      this.apiService.saveSkill(this.model).subscribe(
        res => {
          location.reload();
        }, error => {
          alert('An error in Add Skill');
        }
      );
    }
  }
}
