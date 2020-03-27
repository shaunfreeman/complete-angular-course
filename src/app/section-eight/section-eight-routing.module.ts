import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionEightComponent } from './section-eight.component';

const routes: Routes = [
  { path: '', component: SectionEightComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SectionEightRoutingModule { }
