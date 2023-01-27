import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from 'src/app/models/ibook';

@Pipe({
  name: 'routeBook'
})
export class RouteBookPipe implements PipeTransform {

  transform(books: IBook[], routeId: string): any {
    if(routeId) {
      return books.filter(s => s.categories.some(s => s.id == routeId))
    }
    return books;
  }

}
