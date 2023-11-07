import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, map, takeUntil } from 'rxjs';
import RouterConfig from 'src/app/core/config/router.config';
import { NavigationService } from 'src/app/core/navigation/navigation.service';
import { Navigation } from 'src/app/core/navigation/navigation.types';
import { BrandService } from 'src/app/modules/brands/brand.service';
import { SubmenuData } from '../common/sub-menu/sub-menu.type';
import { ProductService } from 'src/app/modules/products/products.service';
import { brandResponseData } from 'src/app/modules/brands/brand.types';

@Component({
  selector: 'classic-layout',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss'],
})
export class ClassicComponent implements OnInit, OnDestroy {
  readonly routerURL = RouterConfig;

  headerList?: Navigation[];
  footerList?: Navigation[];

  isShow: boolean = false;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _navigationService: NavigationService,
    private _brandService: BrandService,
    private _productService: ProductService,
  ) {}

  ngOnInit() {
    this._navigationService.navigation$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((navigation: any) => {
        this.headerList = navigation.header;
        this.footerList = navigation.footer;
      });

    const brandSubmenuIndex = this.getListIndexByTitle(
      this.headerList,
      'brands',
    );
    const productSubmenuIndex = this.getListIndexByTitle(
      this.headerList,
      'products',
    );
    this.getProductCategoryList(this.headerList[productSubmenuIndex].submenu);
    this.getBrandList(this.headerList[brandSubmenuIndex].submenu);
  }

  getBrandList(list: SubmenuData) {
    this._brandService
      .getBrands({ limit: 10 })
      .pipe(
        map((res: any) => {
          return res.data.map((item: brandResponseData) => ({
            id: item.id,
            img: item.image,
            name: item.name,
          }));
        }),
      )
      .subscribe((res) => {
        if (res) {
          list.list = res;
        }
      });
  }

  getProductCategoryList(list: SubmenuData) {
    this._productService
      .getCategoriesOnSearch()
      .pipe(
        map((res: any) => {
          const data = res.data.map((item) => ({
            id: item.id,
            title: item.name,
            link:
              this.routerURL.PRODUCT_CATEGORY +
              '/' +
              item.name.replace('/', '-').replace(' ', '-').toLowerCase(),
            icon: 'bi-headphones',
            active: item.name === 'headphone',
            data: [],
          }));
          res.data.forEach((item, i) => {
            item.type.forEach((e) => {
              data[i].data.push({
                title: e.typeHeader,
                options: e.typeList,
              });
            });
            item.feature.forEach((e) => {
              data[i].data.push({
                title: e.featureHeader,
                options: e.featureList,
              });
            });
          });
          return data;
        }),
      )
      .subscribe((res) => {
        if (res && list.category) {
          list.category.data = res;
          console.log(res);
        }
      });
  }

  getListIndexByTitle(list: Navigation[], title: string) {
    return list.findIndex((t) => {
      return t.submenu?.name === title;
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  showInput() {
    this.isShow = !this.isShow;
  }
}
