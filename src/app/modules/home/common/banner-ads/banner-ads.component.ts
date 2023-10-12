import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'banner-ads',
  templateUrl: './banner-ads.component.html',
  styleUrls: ['./banner-ads.component.scss'],
})
export class BannerAdsComponent implements OnInit {
  @Input() listAds?: any[];
  constructor() {}

  ngOnInit() {}
}
