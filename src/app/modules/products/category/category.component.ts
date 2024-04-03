import { ProductService } from 'app/modules/products/products.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Constant } from 'app/shared/constant';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import RouterConfig from 'app/core/config/router.config';
import { productResponseData } from '../../home/home.types';
import { paginatorData } from 'app/shared/component/paginator/paginator.types';
import { rangeInput } from 'app/shared/component/filter-and-sort/filter-and-sort.type';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit {
  readonly routerURL = RouterConfig;
  paginator: paginatorData = {
    length: 0,
    limit: 28,
    offset: 0,
  };
  productSearchBody: any;
  constructor(
    private _productService: ProductService,
    private _activeRoute: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this._activeRoute.paramMap.subscribe((param) => {
      if (param.get('category')) {
        this.getTypeAndFeature(param.get('category'));
      }
    });
  }

  getProductList(body: any) {
    if (!body['offset']) {
      body['offset'] = 0;
      body['limit'] = 28;
    }
    this._productService
      .getItemsOnSearch(body)
      .pipe(
        map((value: any) => {
          value.data = value.data.map((res: productResponseData) => ({
            id: res.id,
            price: res.price,
            create_date: res.create_date,
            discount: res.discount,
            quantity: res.quantity,
            image: res.thumbnail_url,
            name: res.name,
            view: res.view_number,
            gift: res.gift_id,
            isFavorite: res.favorite,
          }));
          return value;
        }),
      )
      .subscribe({
        next: (res) => {
          if (res) {
            this.productList.data = res.data;
            this.paginator.length = res.meta.length;
            this.paginator.offset = res.meta.offset ? res.meta.offset : 0;
            this.paginator.limit = res.meta.limit;
            this._changeDetectorRef.markForCheck();
          }
        },
      });
  }

  getBrandList(body: any) {
    this._productService
      .getBrandsOnCategory(body)
      .pipe(
        map((res) => {
          return res.data.map((item) => ({
            id: item.id,
            name: item.name,
            active: false,
          }));
        }),
      )
      .subscribe((value) => {
        this.filters.find((t) => t.id === 'brand').options = value;
      });
  }

  getTypeAndFeature(category_name: string) {
    const body = {
      category_name: category_name.replace('-', '_'),
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
          return { category_id: res.data[0].id, data: data };
        }),
      )
      .subscribe((res) => {
        this.productSearchBody = {
          category_id: res.category_id,
        };

        const typeList = res.data.filter((t) => t.type === 'type');
        const featureList = res.data.filter((t) => t.type === 'feature');
        this.categories.options = typeList[0].options;
        this.filters.find((t) => t.id === 'type').options = typeList;
        this.filters.find((t) => t.id === 'feature').options = featureList;
        this.getBrandList(this.productSearchBody);
        this.getProductList(this.productSearchBody);

        this._changeDetectorRef.markForCheck();
      });
  }

  sortOption = {
    title: 'SẮP XẾP THEO:',
    type: Constant.TYPE_SORT_FILTER.SORT,
    sorts: [
      {
        id: 'create_date desc',
        name: 'mới nhất',
      },
      {
        id: 'create_date',
        name: 'cũ nhất',
      },
      {
        id: 'price',
        name: 'Giá thấp đến cao',
      },
      {
        id: 'price desc',
        name: 'Giá cao đến thấp',
      },
    ],
  };

  categories = {
    id: 'type',
    type: Constant.TYPE_SORT_FILTER.FILTER_TYPE_BUTTON,
    options: [],
  };

  filters = [
    {
      id: 'brand',
      title: 'Thương hiệu',
      type: Constant.TYPE_SORT_FILTER.FILTER_BRAND,
      options: [],
    },
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

  productList = {
    type: Constant.TYPE_LIST.PRODUCT_ONLY,
    data: [],
  };

  filterTypeFeature(data) {
    data.forEach((t) => {
      this.productSearchBody[`${t.type + '_id'}`] = t.ids;
      if (!this.productSearchBody[`${t.type + '_id'}`])
        delete this.productSearchBody[`${t.type + '_id'}`];
    });
    this.productSearchBody['offset'] = 0;
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

  handelPagging(page: paginatorData) {
    this.productSearchBody = {
      ...this.productSearchBody,
      offset: page.offset,
      limit: page.limit,
    };

    this.getProductList(this.productSearchBody);
  }

  filterRange(range: rangeInput) {
    this.productSearchBody = {
      ...this.productSearchBody,
      start_price: range.startRange,
      end_price: range.endRange,
      limit: 28,
      offset: 0,
    };
    if (!range.startRange) {
      delete this.productSearchBody['start_price'];
    } else if (!range.endRange) {
      delete this.productSearchBody['end_price'];
    }
    this.getProductList(this.productSearchBody);
  }
}
