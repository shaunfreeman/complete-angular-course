import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Pipe({
  name: 'properTitleCase'
})
export class ProperTitleCasePipe extends TitleCasePipe implements PipeTransform {

  private isPreposition(word: string): boolean {
    const prepositions = ['of', 'the'];
    return prepositions.includes(word.toLowerCase());
  }

  transform(value: string): string {
    if (!value) { return null; }

    value = super.transform(value);
    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (i > 0 && this.isPreposition(words[i])) {
        words[i] = words[i].toLowerCase();
      }
    }

    return words.join(' ');
  }
}
