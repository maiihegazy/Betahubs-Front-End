import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {


  constructor(private router : Router,private http: HttpClient) { }

  createAPIUrl = 'https://enqaz-staging.herokuapp.com/user/admin/shared/add-vendor';
  name: string;
  email:string;
  phoneNumber: number;
  password: string;
  username: string;
  isVendor: boolean; // is business account
  packages : string[] = [''];
  services: string[] = ['Gas','Oil','Battery'];
  enqazPercentage : number;
  ngOnInit() {
  }
  create()
  {
    var data = {
      'name' : this.name,
      'email': this.email, 
      'phoneNumber': this.phoneNumber,
      'password': this.password,
      'username': this.username, 
      'isVendor'  :  this.isVendor ,
      'packages' : this.packages, 
      'services' :  this.services,
      'enqazPercentage' : this.enqazPercentage,

    }
    var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token')
      }};
    this.http.post(this.createAPIUrl, [data] , config).subscribe(res=>{
      console.log('created', res);
    })
    
  }
}
