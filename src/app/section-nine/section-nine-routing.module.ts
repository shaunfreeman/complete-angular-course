import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionNineComponent } from './section-nine.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: SectionNineComponent },
  { path: 'followers', component: GithubFollowersComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SectionNineRoutingModule { }
