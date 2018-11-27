import { Component, OnInit } from '@angular/core';
import {VendorCreateService} from './vendors-list/vendor-create/vendor-create.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private vendorCreateService : VendorCreateService,) { }

  seleted :any;
  ngOnInit() {
    
  }
 
  
}
