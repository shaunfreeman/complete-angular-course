import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionNineComponent } from './section-nine.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { RouterModule } from '@angular/router';
import { SectionNineRoutingModule } from './section-nine-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    SectionNineComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SectionNineRoutingModule,
    NgbModule
  ],
  providers: [ PostService ],
  exports: [ SectionNineComponent ]
})
export class SectionNineModule { }
