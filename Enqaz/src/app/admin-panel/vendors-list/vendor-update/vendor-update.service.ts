import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorUpdateService {

  constructor() { 
  }

  

  selectedVendor= {
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
  };
}
