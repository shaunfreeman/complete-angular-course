import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionEightComponent } from './section-eight.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SectionEightRoutingModule } from './section-eight-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    SectionEightComponent,
    SignUpFormComponent,
    NewCourseFormComponent,
    FormBuilderComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SectionEightRoutingModule,
    NgbModule
  ],
  exports: [
    SectionEightComponent
  ]
})
export class SectionEightModule { }
