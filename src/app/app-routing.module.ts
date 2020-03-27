import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessForbiddenComponent } from './access-forbidden/access-forbidden.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'access-forbidden', component: AccessForbiddenComponent },
  { path: 'section-three', loadChildren: './section-three/section-three.module#SectionThreeModule'},
  { path: 'section-four', loadChildren: './section-four/section-four.module#SectionFourModule'},
  { path: 'section-five', loadChildren: './section-five/section-five.module#SectionFiveModule'},
  { path: 'section-six', loadChildren: './section-six/section-six.module#SectionSixModule'},
  { path: 'section-seven', loadChildren: './section-seven/section-seven.module#SectionSevenModule'},
  { path: 'section-eight', loadChildren: './section-eight/section-eight.module#SectionEightModule'},
  { path: 'section-nine', loadChildren: './section-nine/section-nine.module#SectionNineModule'},
  { path: 'section-ten', loadChildren: './section-ten/section-ten.module#SectionTenModule'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
