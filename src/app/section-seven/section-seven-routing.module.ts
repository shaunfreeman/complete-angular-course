import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionSevenComponent } from './section-seven.component';

const routes: Routes = [
  { path: '', component: SectionSevenComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SectionSevenRoutingModule { }
