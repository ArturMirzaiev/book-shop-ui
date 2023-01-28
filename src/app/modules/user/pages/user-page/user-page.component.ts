import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IBook } from 'src/app/models/ibook';
import { ICategory } from 'src/app/models/icategory';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  isLoadingContent = true;
  isLoadingPanel = true;

  books: IBook[] = []
  categories: ICategory[]

  routeCategoryId = ''
  searchBook = ''
  selected = 'none'
  
  filterMetadata = { count: 0 }

  constructor(
    private bookService: BookService,
    private categoryService: CategoryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params
      .subscribe((res: { id: string }) => {
        this.routeCategoryId = res.id
    })

    this.bookService.getBooks()
      .subscribe((res: IBook[]) => {
        this.isLoadingContent = true;
        this.books = res
        this.isLoadingContent = false;
    })  

    this.categoryService.getCategories()
      .subscribe((res: ICategory[]) => {
        this.isLoadingPanel = true;
        this.categories = res
        this.isLoadingPanel = false
      })
  }
}

