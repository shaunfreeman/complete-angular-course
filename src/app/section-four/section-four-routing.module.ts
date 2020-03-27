import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionFourComponent } from './section-four.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';

const routes: Routes = [
  { path: '', component: SectionFourComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'title-casing', component: TitleCasingComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SectionFourRoutingModule { }
