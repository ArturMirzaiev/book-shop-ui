import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from '../models/ibook';
import { IPostBook } from '../models/ipostbook';
import { PatchBookRequest } from '../models/patch-book-request';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<IBook[]>("https://localhost:7098/api/Book");
  }

  createBook(book: PatchBookRequest) {
    return this.http.post<PatchBookRequest>("https://localhost:7098/api/Book", book);
  }

  //delete me
  getUsers() {
    return this.http.get<User[]>("https://localhost:7098/api/Auth/users");
  }

  patchBook(book: PatchBookRequest) {
    return this.http.patch("https://localhost:7098/api/Book", book);
  }

  putBook(book: IBook) {
    return this.http.put("https://localhost:7098/api/Book", book);
  }
 
  getBookById(id: string){
    return this.http.get(`https://localhost:7098/api/Book/${id}`);
  }

  removeBook(id: string) {
    return this.http.delete(`https://localhost:7098/api/Book/${id}`);
  }
}
