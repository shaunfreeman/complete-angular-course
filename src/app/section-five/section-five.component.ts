import { Component } from '@angular/core';
import { Favorite } from '../section-four/favorite/favorite';


@Component({
  selector: 'app-section-five',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.scss']
})
export class SectionFiveComponent {
  post = {
    title: 'Title',
    isFavorite: true
  };

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  };

  onFavoriteChanged(eventArgs: Favorite) {
    this.post.isFavorite = eventArgs.isFavorite;
    console.log('Favorite changed.', eventArgs.isFavorite);
  }
}
