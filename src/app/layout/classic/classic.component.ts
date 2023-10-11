import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'classic-layout',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss'],
})
export class ClassicComponent implements OnInit {
  isShow: boolean = false;

  constructor() {}

  ngOnInit() {}
  showInput() {
    this.isShow = !this.isShow;
  }
}
