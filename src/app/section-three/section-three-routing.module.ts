import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionThreeComponent } from './section-three.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';

const routes: Routes = [
  { path: '', component: SectionThreeComponent },
  { path: 'course', component: CourseComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'authors', component: AuthorsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SectionThreeRoutingModule { }
