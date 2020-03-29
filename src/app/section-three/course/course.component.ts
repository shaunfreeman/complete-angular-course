import { Component } from '@angular/core';
import { GithubCodeService } from '../../services/github-code.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  tsUrl = 'src/app/section-three/course/course.component.ts';
  htmlUrl = 'src/app/section-three/course/course.component.html';

  constructor(private codeService: GithubCodeService) { }

  getTsUrl(): string {
    return this.codeService.url(this.tsUrl);
  }

  getHtmlUrl(): string {
    return this.codeService.url(this.htmlUrl);
  }
}
