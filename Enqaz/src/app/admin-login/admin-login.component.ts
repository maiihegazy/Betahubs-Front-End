import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from './admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [LoginService],
})
export class AdminLoginComponent implements OnInit {

  constructor(private router : Router, private loginService : LoginService) { }

  ngOnInit() {

    }
 email : string;
 password : string;


 onLogin(){
   if (this.email != ''&& this.password!=''){
    this.loginService.Login(this.email, this.password);
   }
 }
validationClasses(){
  let classes = {
    invalidAdmin : this.loginService.isExist,
    validAdmin : !(this.loginService.isExist),
  }
  return classes;
}

 

}
