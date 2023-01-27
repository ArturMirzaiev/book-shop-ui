import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAuthor } from 'src/app/models/iauthors';
import { IBook } from 'src/app/models/ibook';
import { ICategory } from 'src/app/models/icategory';
import { IPostBook } from 'src/app/models/ipostbook';
import { PatchBookRequest } from 'src/app/models/patch-book-request';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  books;
  authors;
  categories;

  addForm: FormGroup;

  searchCategories = ''
  searchAuthors = ''

  localAuthors: IAuthor[] = []
  localCategories: ICategory[] = []

  constructor(
    private bookService: BookService,
    private categoryService: CategoryService,
    private authorService: AuthorService) {
  }

  ngOnInit() {

    this.bookService.getBooks()
      .subscribe(data => this.books = data);

    this.categoryService.getCategories()
      .subscribe(data => this.categories = data);

    this.authorService.getAuthors()
      .subscribe(data => this.authors = data);


    this.addForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      quantity: new FormControl(0, [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
      categoryIds: new FormControl([]),
      authorIds: new FormControl([])
    })
  }

  onSubmit() {
    this.addForm.value.categoryIds = this.localCategories.map((val) => val.id);
    this.addForm.value.authorIds = this.localAuthors.map((val) => val.id);

    this.bookService.createBook(this.addForm.value as PatchBookRequest)
      .subscribe((response: PatchBookRequest) => {
        this.addForm.reset()
      },
        err => alert("Something went wrong"))
  }

  addLocalAuthor(author) {
    if (this.localAuthors.some(aut => aut.id == author.id)) {
      return
    }
    this.localAuthors.push(author);
  }

  addLocalCategory(category) {
    if (this.localCategories.some(cat => cat.id == category.id)) {
      return
    }
    this.localCategories.push(category);

  }

  removeLocalAuthor(author) {
    this.localAuthors.forEach((value, index) => {
      if (value.id == author.id) {
        this.localAuthors.splice(index, 1);
      }
    })
  }

  removeLocalCategory(category) {
    this.localCategories.forEach((value, index) => {
      if (value.id == category.id) {
        this.localCategories.splice(index, 1);
      }
    })
  }
}
