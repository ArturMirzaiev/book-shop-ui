import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book

  onerrorImage = 'https://cf.shopee.ph/file/4239a42d145d893e34cefd13f9dcfb2a'

  constructor() { }

  ngOnInit() {
  }

}
