import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAuthor } from 'src/app/models/iauthors';
import { IBook } from 'src/app/models/ibook';
import { ICategory } from 'src/app/models/icategory';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  id = ''
  book: IBook
  categories: ICategory[];
  authors: IAuthor[];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((res:any) => {
      this.id = res.id
      console.log(res);
    })

    this.bookService.getBookById(this.id)
      .subscribe((res:any) => {
        this.book = res
        console.log(res);
        this.categories = res.categories;
        this.authors = res.authors
      });
  }

}
