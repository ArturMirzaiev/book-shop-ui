import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from 'src/app/models/ibook';

@Pipe({
  name: 'filterBook'
})
export class FilterBookPipe implements PipeTransform {

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

    let filteredItems = items.filter((it: IBook) => {
      return it.title.toLocaleLowerCase().includes(searchText);
    })

    return filteredItems;
  }

}
