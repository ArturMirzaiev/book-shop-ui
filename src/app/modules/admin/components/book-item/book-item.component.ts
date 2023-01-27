import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAuthor } from 'src/app/models/iauthors';
import { IBook } from 'src/app/models/ibook';
import { ICategory } from 'src/app/models/icategory';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book: IBook;
  @Input() categories: ICategory[];
  @Input() authors: IAuthor[];

  warnModal = false;
  modal = false;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  removeBook() {
    this.bookService.removeBook(this.book.id)
      .subscribe(
        res => {
          this.warnModal = false;
        }
      );
  }
}
