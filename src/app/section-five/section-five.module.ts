import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionFiveComponent } from './section-five.component';
import { SectionFourModule } from '../section-four/section-four.module';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { SectionFiveRoutingModule } from './section-five-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    SectionFiveComponent,
    PanelComponent,
    LikeComponent
  ],
  imports: [
    CommonModule,
    SectionFiveRoutingModule,
    SectionFourModule,
    NgbModule
  ],
  exports: [ SectionFiveComponent ]
})
export class SectionFiveModule { }
