import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  isSignIn = false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if ( localStorage.getItem('isLogin')== 'true'){
      this.isSignIn = true;
    }else{
      this.isSignIn = false;
    }
  }

  // tslint:disable-next-line:typedef
  signOut() {
    localStorage.removeItem('isLogin');
    this.ngOnInit();
    this.router.navigate(['login']);
  }

  click() {
    this.ngOnInit();
  }
}
