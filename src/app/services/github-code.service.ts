import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubCodeService {
  private baseUrl = 'https://raw.githubusercontent.com/shaunfreeman/complete-angular-course/master/';

  url(endPoint: string): string {
    return this.baseUrl + endPoint;
  }
}
