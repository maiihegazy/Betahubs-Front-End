import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FormsModule } from '@angular/forms'
import {LoginService} from './admin-login/admin-login.service'
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import {PanelService} from './admin-panel/admin-panel.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { VendorProfileComponent } from './admin-panel/vendors-list/vendor-profile/vendor-profile.component';
import { VendorsListComponent } from './admin-panel/vendors-list/vendors-list.component';
import { VendorProfileService } from './admin-panel/vendors-list/vendor-profile/vendor-profile.service';
import { VendorUpdateComponent } from './admin-panel/vendors-list/vendor-update/vendor-update.component';
import { VendorCreateComponent } from './admin-panel/vendors-list/vendor-create/vendor-create.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminPanelComponent,
    VendorProfileComponent,
    VendorsListComponent,
    VendorUpdateComponent,
    VendorCreateComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    
  ],
  providers: [
    LoginService,
    PanelService,
    VendorProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
