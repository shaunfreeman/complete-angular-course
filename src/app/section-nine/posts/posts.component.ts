import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from '../services/post.service';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { BadInput } from '../../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe((response: Post[]) => this.posts = response);
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value } as Post;
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe((newPost: Post) => {
        post.id = newPost.id;
      }, (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        } else {
          throw error;
        }
    });
  }

  updatePost(post: Post) {
    this.service.update(post)
      .subscribe((updatedPost: Post) => {
        console.log(updatedPost);
      });
  }

  deletePost(post: Post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(() => {}, (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else {
          throw error;
        }
      });
  }
}
