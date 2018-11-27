import {Injectable} from '@angular/core'
import { VendorProfileComponent } from './vendor-profile.component';


@Injectable()
export class VendorProfileService{
 
    constructor(){
      
    }

  vendorSelected = {
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