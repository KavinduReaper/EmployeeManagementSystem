import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../Service/api.service';
import {Login} from '../../Model/login';
import {Md5} from 'ts-md5/dist/md5';
import {errorObject} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  login: Login = new Login();


  constructor(

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiservice: ApiService

  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line:triple-equals
    if ( localStorage.getItem('isLogin') == 'true'){
      this.router.navigate(['home']);
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  // tslint:disable-next-line:typedef
  get f() { return this.loginForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.login.password = Md5.hashStr(this.f.password.value).toString();
    this.login.email = this.f.username.value;
    this.apiservice.login(this.login).subscribe(
        res => {
          // tslint:disable-next-line:triple-equals
          if (res){
            localStorage.removeItem('isLogin');
            localStorage.setItem('isLogin', 'true');
            this.router.navigate(['home']);
          }else{
            alert('Wrong credentials');
            localStorage.setItem('isLogin', 'false');
            location.reload();
          }
        },
        error => {
          alert('Error in server');
        });
  }


  // tslint:disable-next-line:typedef
  register() {
    this.login.password = Md5.hashStr(this.f.password.value).toString();
    this.login.email = this.f.username.value;

    this.apiservice.register(this.login).subscribe(
    res => {
      alert(res);
    }, err => {
        alert(err.error.text);
      }
  );
  }
}
