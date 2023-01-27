import { _isTestEnvironment } from '@angular/cdk/platform';
import { Pipe, PipeTransform } from '@angular/core';
import { IAuthor } from 'src/app/models/iauthors';
import { ICategory } from 'src/app/models/icategory';

@Pipe({
  name: 'filterAuthor'
})
export class FilterAuthorPipe implements PipeTransform {

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

    return items.filter((it: IAuthor) => {
      return it.fullName.toLocaleLowerCase().includes(searchText);
    })
  }

}
