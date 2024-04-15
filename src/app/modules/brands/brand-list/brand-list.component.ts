import { Component, OnInit } from '@angular/core';
import RouterConfig from 'app/core/config/router.config';
import { BrandService } from '../brand.service';
import { brandList, brandResponseData } from '../brand.types';
import { map } from 'rxjs';
import { Constant } from 'app/shared/constant';

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
    this._brandService
      .getBrands(null)
      .pipe(
        map((res: any) => {
          console.log(res);

          return res.data.map((item: brandResponseData) => ({
            id: item.id,
            img: item.thumbnail_url?.includes('https')
              ? item.thumbnail_url
              : (item.thumbnail_url?.includes('/')
                  ? Constant.IMG_DIR.SHOP
                  : Constant.IMG_DIR.GOOGLE_DRIVE) + item.thumbnail_url,
            name: item.name,
          }));
        }),
      )
      .subscribe((res) => {
        if (res) {
          console.log(res);

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

  routeToBrand(id) {
    this._brandService.getBrandId(parseInt(id));
  }
}
