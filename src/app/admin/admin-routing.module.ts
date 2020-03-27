import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../auth/auth-guard';
import { AdminAuthGuard } from './admin-auth-guard';


const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [ AuthGuard, AdminAuthGuard ] }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule { }
