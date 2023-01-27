import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from 'src/app/models/ibook';

@Pipe({
  name: 'filterBook2'
})
export class FilterBook2Pipe implements PipeTransform {

  transform(items: any[], searchText?: string, filterMetadata?: any): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      filterMetadata.count = items.length
      return items;
    }
    if(searchText == 'all'){
      filterMetadata.count = items.length
      return items;
    }
    
    searchText = searchText.toLocaleLowerCase();

    let filteredItems = items.filter((it: IBook) => {
      return it.title.toLocaleLowerCase().includes(searchText);
    })

    filterMetadata.count = filteredItems.length
    return filteredItems;
  }
}
