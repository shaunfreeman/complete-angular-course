import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTenComponent } from './section-ten.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { ArchiveComponent } from './archive/archive.component';
import { RouterModule } from '@angular/router';
import { SectionTenRoutingModule } from './section-ten-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ SectionTenComponent, GithubProfileComponent, ArchiveComponent ],
  imports: [
    CommonModule,
    RouterModule,
    SectionTenRoutingModule,
    NgbModule
  ],
  exports: [ SectionTenComponent ]
})
export class SectionTenModule { }
