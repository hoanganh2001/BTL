import { ProductService } from 'src/app/modules/products/products.service';
import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/shared/constant';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import RouterConfig from 'src/app/core/config/router.config';
import { productResponseData } from '../../home/home.types';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  readonly routerURL = RouterConfig;

  constructor(
    private _productService: ProductService,
    private _activeRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this._activeRoute.paramMap.subscribe((param) => {
      if (param.get('category')) {
        this.getTypeAndFeature(param.get('category'));
        this.getProductList(param.get('category'));
      }
    });
  }

  getProductList(category_name: string) {
    const body = {
      limit: 28,
      skip: 0,
      category_name: category_name.replace('-', '_'),
    };
    this._productService
      .getItemsOnSearch(body)
      .pipe(
        map((res: any) => {
          return res.data.map((item: productResponseData) => ({
            id: item.id,
            price: item.price,
            create_date: item.create_date,
            discount: item.discount,
            image: item.image,
            name: item.name,
            view: item.view_number,
            gift: item.gift_id,
          }));
        }),
      )
      .subscribe({
        next: (res) => {
          if (res) {
            this.productList.data = res;
          }
        },
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
                options: e.typeList,
              });
            });
            item.feature.forEach((e) => {
              data.push({
                type: 'feature',
                title: e.featureHeader,
                options: e.featureList,
              });
            });
          });
          return data;
        }),
      )
      .subscribe((res) => {
        const typeList = res.filter((t) => t.type === 'type');
        const featureList = res.filter((t) => t.type === 'feature');
        this.categories.categories = typeList[0].options;
        this.filters.find((t) => t.id === 'type').options = typeList;
        this.filters.find((t) => t.id === 'feature').options = featureList;
      });
  }

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

  history = {
    header: 'Sản phẩm đã xem',
    type: Constant.TYPE_LIST.PRODUCT_SLIDE,
    data: [],
  };

  filterData() {
    console.log('filter');
    //add pram brand
    //call api
  }

  sortData() {
    console.log('sort');
  }
}
