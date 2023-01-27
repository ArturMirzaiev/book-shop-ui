import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, last } from 'rxjs';
import { IBook } from 'src/app/models/ibook';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-find-page',
  templateUrl: './find-page.component.html',
  styleUrls: ['./find-page.component.css']
})
export class FindPageComponent implements OnInit {

  books;
  categories;
  authors;
  loading = true;

  searchBook = ''

  constructor(
    private bookService: BookService,
    private categoryService: CategoryService,
    private authorService: AuthorService) { }

  ngOnInit(): void {
    this.loading = true;
    this.bookService.getBooks()
      .subscribe(data => {
        this.books = data;
        this.loading = false;
      });

    this.categoryService.getCategories()
      .subscribe(data => this.categories = data);

    this.authorService.getAuthors()
      .subscribe(data => this.authors = data);
  }
}
