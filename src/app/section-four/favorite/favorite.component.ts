import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  @Input() isSelected: boolean;
  @Output() favoriteEvent = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.favoriteEvent.emit({ isFavorite: this.isSelected });
  }
}
