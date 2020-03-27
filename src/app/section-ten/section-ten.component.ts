import { Component, OnInit } from '@angular/core';
import { Archive } from './archive/archive';

@Component({
  selector: 'app-section-ten',
  templateUrl: './section-ten.component.html',
  styleUrls: ['./section-ten.component.scss']
})
export class SectionTenComponent implements OnInit {
  public archive: Archive[] = [
    {
      year: 2017,
      month: 1
    },
    {
      year: 2017,
      month: 2
    },
    {
      year: 2017,
      month: 3
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
