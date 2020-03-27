import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummeryPipe } from './pipes/summery.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { ProperTitleCasePipe } from './pipes/proper-title-case.pipe';
import { SectionFourComponent } from './section-four.component';
import { FormsModule } from '@angular/forms';
import { SectionFourRoutingModule } from './section-four-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    SummeryPipe,
    FavoriteComponent,
    TitleCasingComponent,
    ProperTitleCasePipe,
    SectionFourComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SectionFourRoutingModule,
    NgbModule
  ],
  exports: [ SectionFourComponent, FavoriteComponent ]
})
export class SectionFourModule { }
