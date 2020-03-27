import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionFiveComponent } from './section-five.component';

const routes: Routes = [
  { path: '', component: SectionFiveComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SectionFiveRoutingModule { }
