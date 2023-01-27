import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAuthor } from 'src/app/models/iauthors';
import { IBook } from 'src/app/models/ibook';
import { ICategory } from 'src/app/models/icategory';
import { PatchBookRequest } from 'src/app/models/patch-book-request';
import { BookService } from 'src/app/services/book.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-book-modal',
  templateUrl: './edit-book-modal.component.html',
  styleUrls: ['./edit-book-modal.component.css']
})
export class EditBookModalComponent implements OnInit {

  @Output() close = new EventEmitter<void>()
  @Input() book: IBook;
  @Input() categories: ICategory[];
  @Input() authors: IAuthor[];
  @Output() updatedBookEvent = new EventEmitter<IBook>();

  editForm: FormGroup;

  searchCategories = ''
  searchAuthors = ''

  localAuthors: IAuthor[] = []
  localCategories: ICategory[] = []

  constructor(
    private bookService: BookService) {
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      id: new FormControl(this.book.id, [Validators.required]),
      title: new FormControl(this.book.title, [Validators.required]),
      description: new FormControl(this.book.description, [Validators.required]),
      price: new FormControl(this.book.price, [Validators.required]),
      quantity: new FormControl(this.book.quantity, [Validators.required]),
      imageUrl: new FormControl(this.book.imageUrl, [Validators.required]),
      categoryIds: new FormControl(this.book.categories.map((val) => val.id)),
      authorIds: new FormControl(this.book.authors.map((val) => val.id))
    })

    this.localAuthors = this.book.authors;
    this.localCategories = this.book.categories;
  }

  onSubmit() {
    this.editForm.value.categoryIds = this.localCategories.map((val) => val.id);
    this.editForm.value.authorIds = this.localAuthors.map((val) => val.id);

    this.bookService.patchBook(this.editForm.value as PatchBookRequest)
      .subscribe((response: IBook) => {
        this.updatedBookEvent.emit(response)
        this.close.emit()
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
