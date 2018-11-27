import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { VendorProfileComponent } from './admin-panel/vendors-list/vendor-profile/vendor-profile.component';
import { VendorCreateComponent } from './admin-panel/vendors-list/vendor-create/vendor-create.component';
import { VendorUpdateComponent } from './admin-panel/vendors-list/vendor-update/vendor-update.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'admin-login', pathMatch: 'full'},
  {path : 'admin-login', component: AdminLoginComponent},
  {path: 'admin-panel', component: AdminPanelComponent,
  children: [                          //<---- child components declared here
      {
        path: '', redirectTo: 'vendor-profile', pathMatch:'full'
      },
      
     {
         
          path:'vendor-profile',
          component: VendorProfileComponent
      },
      {
          path:'vendor-create',
          component: VendorCreateComponent
      },
      {
          path:'vendor-update',
          component: VendorUpdateComponent
      },   
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
