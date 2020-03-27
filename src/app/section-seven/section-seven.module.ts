import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSevenComponent } from './section-seven.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionSevenRoutingModule } from './section-seven-routing.module';


@NgModule({
  declarations: [ SectionSevenComponent, ContactFormComponent, CourseFormComponent ],
  exports: [
    SectionSevenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SectionSevenRoutingModule,
    NgbModule
  ]
})
export class SectionSevenModule { }
