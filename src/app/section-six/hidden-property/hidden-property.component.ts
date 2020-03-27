import { Component } from '@angular/core';

@Component({
  selector: 'app-hidden-property',
  templateUrl: './hidden-property.component.html',
  styleUrls: ['./hidden-property.component.scss']
})
export class HiddenPropertyComponent {
  courses = [1, 2];
}
