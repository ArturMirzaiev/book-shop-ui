import { Pipe, PipeTransform } from '@angular/core';
import { UntypedFormArray } from '@angular/forms';

@Pipe({
  name: 'sortSelect'
})
export class SortSelectPipe implements PipeTransform {

  transform(items: any, selected: any): any {

    switch (selected) {
      case "default":
        return items.sort();  
      case "a-z":
        return items.sort((a, b) => a.title.localeCompare(b.title))
      case "z-a":
        return items.sort((a, b) => b.title.localeCompare(a.title))
      case "low-high":
        return items.sort((a, b) => a.price - b.price)
      case "high-low":
        return items.sort((a, b) => b.price - a.price)
    }

    return items;
  }

}
