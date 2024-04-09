import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import RouterConfig from 'app/core/config/router.config';
import { SearchService } from './search.service';
import { debounceTime } from 'rxjs';
import { productData, newData } from './search.types';
import { Constant } from 'app/shared/constant';
import { NotificationService } from 'app/core/service/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  readonly RouterConfig = RouterConfig;

  searchFormControl = new FormControl('', []);
  productList: productData[] = [];
  newList: newData[] = [];

  readonly routerURL = RouterConfig;
  isShow: boolean = false;

  constructor(
    private _searchService: SearchService,
    private _notiService: NotificationService,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.searchFormControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        if (value) this.getListData(value);
      });
  }

  getListData(search: string) {
    const param = {
      name: search,
    };
    this._searchService.getItemsOnSearch(param).subscribe({
      next: (res) => {
        this.productList = res.data.products;
        this.newList = res.data.news;
        console.log(this.productList);
      },
      error: (err) => {
        this._notiService?.showError(err.error.message);
      },
    });
  }

  getDiscountPrice(cost: number, discount: number): number {
    return cost * (1 - discount / 100);
  }

  showInput() {
    if (this.searchFormControl.value === '') this.isShow = !this.isShow;
  }

  getImgUrl(id: string): string {
    return (
      (id?.includes('/')
        ? Constant.IMG_DIR.SHOP
        : Constant.IMG_DIR.GOOGLE_DRIVE) + id
    );
  }

  getDetail(page: string, id: number) {
    if (page === 'product') {
      this._router.navigateByUrl(this.RouterConfig.PRODUCT_DETAIL + id);
    }
    if (page === 'news') {
      this._router.navigateByUrl(this.RouterConfig.NEWS + '/' + id);
    }
  }
}
