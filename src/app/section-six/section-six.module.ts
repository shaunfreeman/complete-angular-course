import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSixComponent } from './section-six.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { HiddenPropertyComponent } from './hidden-property/hidden-property.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { InputFormatDirective } from './custom-directives/input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { SectionSixRoutingModule } from './section-six-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SectionSixComponent,
    NgIfComponent,
    HiddenPropertyComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    CustomDirectivesComponent,
    InputFormatDirective,
    ZippyComponent
  ],
  imports: [
    CommonModule,
    SectionSixRoutingModule,
    NgbModule
  ],
  exports: [
    SectionSixComponent
  ]
})
export class SectionSixModule { }
