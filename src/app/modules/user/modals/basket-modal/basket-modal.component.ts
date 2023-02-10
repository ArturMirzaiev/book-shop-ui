import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-basket-modal',
  templateUrl: './basket-modal.component.html',
  styleUrls: ['./basket-modal.component.css']
})
export class BasketModalComponent implements OnInit {

  @Output() close = new EventEmitter<void>()
  
  constructor() { }

  ngOnInit() {
  }

}
