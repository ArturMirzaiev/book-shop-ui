import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(items: any[], searchText?: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    if(searchText == 'all'){
      return items;
    }
    
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it: ICategory) => {
      return it.name.toLocaleLowerCase().includes(searchText);
    })
  }

}
