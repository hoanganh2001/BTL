import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Constant } from 'src/app/shared/constant';
import { BrandService } from '../brand.service';
import { Subject, map, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { brandData } from '../brand.types';
import { ProductService } from '../../products/products.service';
import { productResponseData } from '../../home/home.types';
import { paginatorData } from 'src/app/shared/component/paginator/paginator.types';

@Component({
  selector: 'app-brand-product-list',
  templateUrl: './brand-product-list.component.html',
  styleUrls: ['./brand-product-list.component.scss'],
})
export class BrandProductListComponent implements OnInit {
  brandName?: string;
  paginator: paginatorData = {
    length: 0,
    limit: 28,
    offset: 0,
  };
  productSearchBody: any;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  sortOption = {
    title: 'SẮP XẾP THEO:',
    type: Constant.TYPE_SORT_FILTER.SORT,
    sorts: [
      {
        id: 'new',
        name: 'mới nhất',
      },
      {
        id: 'old',
        name: 'cũ nhất',
      },
      {
        id: 'cheap',
        name: 'Giá thấp đến cao',
      },
      {
        id: 'expensive',
        name: 'Giá cao đến thấp',
      },
    ],
  };

  categories = {
    type: Constant.TYPE_SORT_FILTER.FILTER_TYPE,
    categories: [],
  };

  filters = [
    {
      id: 'type',
      title: '',
      type: Constant.TYPE_SORT_FILTER.FILTER_TYPE,
      options: [],
    },
    {
      id: 'feature',
      title: '',
      type: Constant.TYPE_SORT_FILTER.FILTER_FEATURE,
      options: [],
    },
    {
      id: 'price',
      title: 'giá tiền',
      type: Constant.FILTER_TYPE.RANGE_INPUT,
      description: 'Chọn khoảng giá tiền (triệu đồng)',
    },
  ];

  brandDetail: brandData;

  productList = {
    type: Constant.TYPE_LIST.PRODUCT_ONLY,
    data: [],
  };
  constructor(
    private _activeRoute: ActivatedRoute,
    private _brandService: BrandService,
    private _productService: ProductService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this._activeRoute.paramMap.subscribe((param) => {
      if (param.get('brandName')) {
        this.getBrandDetail(param.get('brandName'));
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  getBrandDetail(name: string) {
    const body = {
      brand_name: name.replace('-', '_'),
    };
    this._brandService
      .getBrands(body)
      .pipe(
        map((res) => {
          return res.data.map(
            (item): brandData => ({
              id: item.id,
              name: item.name,
              image: item.image,
            }),
          )[0];
        }),
      )
      .subscribe((value) => {
        if (value) {
          this.brandDetail = value;
          this.getBrandCategory(value.id);
        }
      });
  }

  getBrandCategory(brandId: string) {
    const body = {
      brand_id: brandId,
    };
    this._brandService
      .getBrandsCategories(body)
      .pipe(
        map((res) => {
          return res.data.map((item, i) => ({
            id: item.id,
            name: item.name,
            active: i === 0,
          }));
        }),
      )
      .subscribe((value) => {
        if (value) this.categories.categories = value;
        const activeDefaultId = this.categories.categories.find(
          (t) => t.active,
        )?.id;
        this.getTypeAndFeature(activeDefaultId);
        this.productSearchBody = {
          category_id: activeDefaultId,
          brand_id: this.brandDetail.id,
          limit: 28,
          offset: 0,
        };
        this.getProductList(this.productSearchBody);
      });
  }

  getProductList(body: any) {
    this._productService
      .getItemsOnSearch(body)
      .pipe(
        map((value) => {
          value.data = value.data.map((res: productResponseData) => ({
            id: res.id,
            price: res.price,
            create_date: res.create_date,
            discount: res.discount,
            image: res.image,
            name: res.name,
            view: res.view_number,
            gift: res.gift_id,
          }));
          return value;
        }),
      )
      .subscribe((res) => {
        if (res) {
          this.productList.data = res.data;
          this.paginator.length = res.meta.length;
          this.paginator.offset = res.meta.offset ? res.meta.offset : 0;
          this.paginator.limit = res.meta.limit;
        }
      });
  }

  getTypeAndFeature(category_id: string) {
    const body = {
      category_id: category_id,
    };

    this._productService
      .getCategoriesOnSearch(body)
      .pipe(
        map((res) => {
          const data = [];
          res.data.forEach((item, i) => {
            item.type.forEach((e) => {
              data.push({
                type: 'type',
                title: e.typeHeader,
                options: e.typeList.map((t, i) => ({
                  id: t.id,
                  name: t.name,
                  active: false,
                })),
              });
            });
            item.feature.forEach((e) => {
              data.push({
                type: 'feature',
                title: e.featureHeader,
                options: e.featureList.map((t, i) => ({
                  id: t.id,
                  name: t.name,
                  active: false,
                })),
              });
            });
          });
          return data;
        }),
      )
      .subscribe((res) => {
        const typeList = res.filter((t) => t.type === 'type');
        const featureList = res.filter((t) => t.type === 'feature');
        this.filters.find((t) => t.id === 'type').options = typeList;
        this.filters.find((t) => t.id === 'feature').options = featureList;
        console.log(this.filters);
      });
  }

  filterTypeFeature(data) {
    const typeIds = [];
    const featureIds = [];
    data.forEach((t) => {
      if (t.type === 'type') {
        typeIds.push(t.ids);
      }
      if (t.type === 'feature') {
        featureIds.push(t.ids);
      }
    });
    this.productSearchBody = {
      ...this.productSearchBody,
      offset: 0,
      feature_id: featureIds.flat(),
      type_id: typeIds.flat(),
    };
    if (typeIds.length <= 0) delete this.productSearchBody['type_id'];
    if (featureIds.length <= 0) delete this.productSearchBody['feature_id'];
    this.getProductList(this.productSearchBody);
  }

  sortData(data) {
    const sortData = data.split(' ');
    this.productSearchBody = {
      ...this.productSearchBody,
      offset: 0,
      order_by: sortData[0],
      sort_by: sortData[1],
    };

    if (sortData.length === 1) {
      delete this.productSearchBody['sort_by'];
    }

    this.getProductList(this.productSearchBody);
  }

  filterCategory(id: string) {
    this.categories.categories = this.categories.categories.map((t) => {
      t.active = t.id === id;
      return t;
    });
    this.getTypeAndFeature(id);
    this.productSearchBody = {
      category_id: id,
      brand_id: this.brandDetail.id,
      limit: 28,
      offset: 0,
    };
    this.getProductList(this.productSearchBody);
  }

  handelPagging(page: paginatorData) {
    this.productSearchBody = {
      ...this.productSearchBody,
      offset: page.offset,
      limit: page.limit,
    };
    this.getProductList(this.productSearchBody);
  }
}
