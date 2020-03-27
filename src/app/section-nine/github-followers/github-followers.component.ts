import { Component, OnInit } from '@angular/core';
import { GithubFollowers } from './github-followers';
import { GithubFollowersService } from './github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers: GithubFollowers[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(switchMap(combined => {
        const username = combined[0].get('username');
        const page = combined[1].get('page');

        return this.service.getAll();
      }))
      .subscribe((data: GithubFollowers[]) => this.followers = data);
  }
}
