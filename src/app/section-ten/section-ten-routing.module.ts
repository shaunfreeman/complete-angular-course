import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionTenComponent } from './section-ten.component';
import { ArchiveComponent } from './archive/archive.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';

const routes: Routes = [
  { path: '', component: SectionTenComponent },
  { path: 'archive/:year/:month', component: ArchiveComponent },
  { path: 'followers/:username', component: GithubProfileComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SectionTenRoutingModule { }
