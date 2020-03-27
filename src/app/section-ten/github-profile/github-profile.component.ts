import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(param => {
        const username = param.get('username');
        console.log(username);
      });
  }

  submit() {
    this.router.navigate(['/section-nine'], {
      queryParams: { page: 1, order: 'newest'}
    });
  }

}
