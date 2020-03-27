import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionSixComponent } from './section-six.component';

const routes: Routes = [
  { path: '', component: SectionSixComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SectionSixRoutingModule { }
