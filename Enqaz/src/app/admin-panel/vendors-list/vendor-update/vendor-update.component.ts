import { Component, OnInit } from '@angular/core';
import {VendorUpdateService} from './vendor-update.service'
import { HttpClient } from '@angular/common/http';
import { PanelService } from '../../admin-panel.service';
@Component({
  selector: 'app-vedor-update',
  templateUrl: './vendor-update.component.html',
  styleUrls: ['./vendor-update.component.css'],
  providers:[PanelService]
})
export class VendorUpdateComponent implements OnInit {

  constructor(private vendorUpdateService : VendorUpdateService , private http : HttpClient) {

   }

  ngOnInit() {

  }
  copyValues(){
    this._id =this.vendorUpdateService.selectedVendor._id;
    this.name = this.vendorUpdateService.selectedVendor.name;
    this.email =this.vendorUpdateService.selectedVendor.email;
    this.phoneNumber =this.vendorUpdateService.selectedVendor.phoneNumber;
    this.password = this.vendorUpdateService.selectedVendor.password;
    this.username =this.vendorUpdateService.selectedVendor.username;
    this.isVendor  = this.vendorUpdateService.selectedVendor.isVendor;
    this.packages = this.vendorUpdateService.selectedVendor.packages;
    this.services= this.vendorUpdateService.selectedVendor.services;
    this.enqazPercentage =this.vendorUpdateService.selectedVendor.enqazPercentage;
    console.log(this.email, this.password)
  }

  _id : string;
  name : string;
  email : string;
  phoneNumber : number;
  password : string;
  username : string;
  isVendor :boolean;
  packages : string [];
  services : string[];
  enqazPercentage:number ;
  
  diagnostic :any;
  Update(updatedVendor:any){
   this.name = updatedVendor.name;
   this.email = updatedVendor.email;
   this.phoneNumber= updatedVendor.phoneNumber;
   this.password= updatedVendor.password;
   this.username = updatedVendor.username; 
 
   console.log (this.name, this.email)
  }
  onUpdate(){
    
    console.log('Iam in update')
     var config = {
       headers: {
           'Content-Type': 'application/json',
           'authorization': localStorage.getItem('token')
       }};

       let n ={
       '_id': '5bded9a1235d4e001307aeaa'  ,
       'name' : 'NADA'
       }
 
      return this.http.post('https://enqaz-staging.herokuapp.com/user/admin/shared/update-vendor', n , config)
      .subscribe(res => {
       console.log(res);
      })
    
   }

}
