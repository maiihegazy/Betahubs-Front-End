import { Component, OnInit, Input } from '@angular/core';
import {PanelService} from '../../admin-panel.service';
import { VendorProfileService } from './vendor-profile.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css'],
  providers:[PanelService],
})
export class VendorProfileComponent implements OnInit {

vendorProfile ={
  '_id': '',
  'name' : '',
  'email': '', 
  'phoneNumber': null,
  'password': '',
  'username': '', 
  'isVendor'  :  null ,
  'packages' : null, 
  'services' :  null,
  'enqazPercentage' : null,
}
  constructor(private panelService : PanelService, private vendorProfileService:VendorProfileService, private router:Router) {

   }

  ngOnInit() {
   
  }

 viewVendorProfile(){
  this.vendorProfile = this.vendorProfileService.vendorSelected;
  console.log(this.vendorProfile);

 }
}
