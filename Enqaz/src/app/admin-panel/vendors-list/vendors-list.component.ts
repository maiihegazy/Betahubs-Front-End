import { Component, OnInit, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {PanelService} from '../admin-panel.service';
import {VendorProfileService} from './vendor-profile/vendor-profile.service'
import { VendorUpdateService } from './vendor-update/vendor-update.service';


@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.css'],
  providers: [PanelService],
})
export class VendorsListComponent implements OnInit {

  constructor(private http : HttpClient ,private panelService : PanelService , 
    private vendorProfileService : VendorProfileService, private vendorUpdateService: VendorUpdateService) 
  { 
    this.vendorsList();
  }

  ngOnInit() {
  }

  vendors : any ;
  selectedVendor : any;
  vendorsList(){
    var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('fcmToken')
      }};
      return this.http.get("https://enqaz-staging.herokuapp.com/user/admin/shared/show-vendor", config)
       .subscribe(res => {
         this.vendors = res['list'];
         console.log(this.vendors);
       });
  }


  vendorDetails(vendor :any){
    console.log('Iam in selected object', vendor)
    this.vendorProfileService.vendorSelected = vendor;
    this.vendorUpdateService.selectedVendor = vendor;

  }


}
