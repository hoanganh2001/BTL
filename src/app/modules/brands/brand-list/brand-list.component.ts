import { Component, OnInit } from '@angular/core';
import RouterConfig from 'src/app/core/config/router.config';
import { BrandService } from '../brand.service';
import { brandList } from '../brand.types';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
})
export class BrandListComponent implements OnInit {
  readonly brandRoute = RouterConfig.BRANDS;
  brandList: brandList = {
    title: 'brand list',
    data: [],
  };

  limit: number | null = 20;
  constructor(private _brandService: BrandService) {}

  ngOnInit() {
    this.getBrandList();
  }

  getBrandList() {
    this._brandService.getBrands(null).subscribe((res) => {
      if (res) {
        this.brandList.data = res;
      }
    });
  }

  showMore() {
    this.limit =
      this.limit &&
      this.brandList.data &&
      this.limit < this.brandList.data.length
        ? this.limit * 2
        : null;
  }
}
