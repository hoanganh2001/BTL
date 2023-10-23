import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  allComplete: boolean = false;
  constructor() {}

  ngOnInit() {}
  check() {
    this.allComplete = !this.allComplete;
  }
}
