import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionThreeRoutingModule } from './section-three-routing.module';
import { AuthorsService } from './authors/authors.service';
import { CoursesService } from './courses/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { SectionThreeComponent } from './section-three.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMdModule } from 'ngx-md';


@NgModule({
  declarations: [
    SectionThreeComponent,
    AuthorsComponent,
    CourseComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    SectionThreeRoutingModule,
    NgbModule,
    NgxMdModule
  ],
  providers: [
    AuthorsService,
    CoursesService
  ],
  exports: [ SectionThreeComponent ]
})
export class SectionThreeModule { }
