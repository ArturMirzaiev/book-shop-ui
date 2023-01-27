import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/models/ibook';

@Component({
  selector: 'app-warn-modal',
  templateUrl: './warn-modal.component.html',
  styleUrls: ['./warn-modal.component.css']
})
export class WarnModalComponent implements OnInit {

  @Input() book: IBook;
  @Output() close = new EventEmitter<void>()
  @Output() removedBookEvent = new EventEmitter<void>();

  message = 'Are you sure you want to delete the book?';

  constructor() { }

  ngOnInit() {
  }

}
