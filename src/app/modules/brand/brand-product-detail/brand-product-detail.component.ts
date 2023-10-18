import { filter } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filterData } from '../../product/category/category.type';
import { Constant } from 'src/app/shared/constant';

@Component({
  selector: 'app-brand-product-detail',
  templateUrl: './brand-product-detail.component.html',
  styleUrls: ['./brand-product-detail.component.scss'],
})
export class BrandProductDetailComponent implements OnInit {
  brandName?: string;
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
    categories: [
      {
        id: 'full',
        name: 'Full size',
      },
      {
        id: 'on',
        name: 'on ear',
      },
      {
        id: 'earbud',
        name: 'earbud',
      },
      {
        id: 'in',
        name: 'in ear',
      },
      {
        id: 'wireless',
        name: 'wireless',
      },
      {
        id: 'true_wireless',
        name: 'true wireless',
      },
      {
        id: 'custome',
        name: 'custome in ear',
      },
    ],
  };

  filter = {
    type: Constant.TYPE_SORT_FILTER.FILTER_FEATURE,
    filters: {
      list: [
        {
          id: 'brand',
          title: 'Thương hiệu',
          type: Constant.FILTER_TYPE.MULTI_CHECKBOX,
          options: [
            {
              id: 1,
              name: 'AKG',
              completed: false,
            },
            {
              id: 2,
              name: 'Apple',
              completed: false,
            },
            {
              id: 3,
              name: 'Audeze',
              completed: false,
            },
            {
              id: 4,
              name: 'Audio Technica',
              completed: false,
            },
            {
              id: 5,
              name: 'Bang & Olufsen',
              completed: false,
            },
            {
              id: 6,
              name: 'Beats',
              completed: false,
            },
            {
              id: 7,
              name: 'Beyerdynamic',
              completed: false,
            },
            {
              id: 8,
              name: 'Bose',
              completed: false,
            },
            {
              id: 9,
              name: 'Campfire Audio',
              completed: false,
            },
            {
              id: 10,
              name: 'Denon',
              completed: false,
            },
            {
              id: 11,
              name: 'FiiO',
              completed: false,
            },
            {
              id: 12,
              name: 'Focal',
              completed: false,
            },
            {
              id: 13,
              name: 'Hãng khác',
              completed: false,
            },
            {
              id: 14,
              name: 'HifiMan',
              completed: false,
            },
            {
              id: 15,
              name: 'Jabra',
              completed: false,
            },
            {
              id: 16,
              name: 'Jade Audio',
              completed: false,
            },
            {
              id: 17,
              name: 'JBL',
              completed: false,
            },
            {
              id: 18,
              name: 'Klipsch',
              completed: false,
            },
            {
              id: 19,
              name: 'Koss',
              completed: false,
            },
            {
              id: 20,
              name: 'Marshall',
              completed: false,
            },
            {
              id: 21,
              name: 'Master and Dynamic',
              completed: false,
            },
            {
              id: 22,
              name: 'Dan Clark Audio',
              completed: false,
            },
            {
              id: 23,
              name: 'Noble',
              completed: false,
            },
            {
              id: 24,
              name: 'Partron',
              completed: false,
            },
            {
              id: 25,
              name: 'Radius',
              completed: false,
            },
            {
              id: 26,
              name: 'RHA',
              completed: false,
            },
            {
              id: 27,
              name: 'Sennheiser',
              completed: false,
            },
            {
              id: 28,
              name: 'Shure',
              completed: false,
            },
            {
              id: 29,
              name: 'Skullcandy',
              completed: false,
            },
            {
              id: 30,
              name: 'Sony',
              completed: false,
            },
            {
              id: 31,
              name: 'Stax',
              completed: false,
            },
            {
              id: 32,
              name: 'Westone',
              completed: false,
            },
            {
              id: 33,
              name: 'Yuin',
              completed: false,
            },
            {
              id: 34,
              name: 'Padmate',
              completed: false,
            },
          ],
        },
        {
          id: 'headType',
          title: 'headphone type',
          type: Constant.FILTER_TYPE.MULTI_CHECKBOX,
          options: [
            {
              id: 'full',
              name: 'Full size',
              completed: false,
            },
            {
              id: 'on',
              name: 'on ear',
              completed: false,
            },
            {
              id: 'earbud',
              name: 'earbud',
              completed: false,
            },
            {
              id: 'in',
              name: 'in ear',
              completed: false,
            },
            {
              id: 'wireless',
              name: 'wireless',
              completed: false,
            },
            {
              id: 'true_wireless',
              name: 'true wireless',
              completed: false,
            },
            {
              id: 'custome',
              name: 'custome in ear',
              completed: false,
            },
          ],
        },
        {
          id: 'headfeature',
          title: 'headphone feature',
          type: Constant.FILTER_TYPE.MULTI_CHECKBOX,
          options: [
            {
              id: 1,
              name: 'Chống ồn',
              completed: false,
            },
            {
              id: 2,
              name: 'Không dây',
              completed: false,
            },
            {
              id: 3,
              name: 'Có micro',
              completed: false,
            },
            {
              id: 4,
              name: 'Có tăng giảm âm lượng',
              completed: false,
            },
            {
              id: 5,
              name: 'Tai nghe thể thao',
              completed: false,
            },
            {
              id: 6,
              name: 'Tai nghe DJ',
              completed: false,
            },
            {
              id: 7,
              name: 'Tai nghe phòng thu',
              completed: false,
            },
            {
              id: 8,
              name: 'Tai nghe Gaming',
              completed: false,
            },
          ],
        },
        {
          id: 'price',
          title: 'giá tiền',
          type: Constant.FILTER_TYPE.RANGE_INPUT,
          description: 'Chọn khoảng giá tiền (triệu đồng)',
        },
      ],
      brand: {
        id: 18,
        name: 'Beyerdynamic',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/beyerdynamic-logo-3kshop.svg',
      },
    },
  };

  brandDetail = {
    id: 18,
    name: 'Beyerdynamic',
    img: 'https://3kshop.vn/wp-content/uploads/2019/10/beyerdynamic-logo-3kshop.svg',
  };

  productList = {
    type: Constant.TYPE_LIST.PRODUCT_ONLY,
    data: [
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/48386/ezgif-3-9c7341c351-450x450-c.jpg',
        name: 'Beyerdynamic Xelento Remote Gen 2',
        cost: 29990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/45372/beyerdynamic-xelento-remote-gen-2-2-450x450-c.png',
        name: 'Beyerdynamic Xelento Remote',
        cost: 23500000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/17559/beyerdynamic-xelento-remote-3kshop-1-450x450-c.jpg',
        name: 'Beyerdynamic Xelento Wireless',
        cost: 27500000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/16243/beyerdynamic-xenlento-wireless-3kshop-0-450x450-c.jpg',
        name: 'Beyerdynamic DT 990 Black Special Edition',
        cost: 5990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/44136/beyerdynamic-dt-900-black-special-edition-0-450x450-c.png',
        name: 'Beyerdynamic Free BYRD',
        cost: 5990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/45477/tai_nghe_beyerdynamic_free_byrd-450x450-c.jpeg',
        name: 'Beyerdynamic DT770 PRO Black',
        cost: 4990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/43647/beyerdynamic-dt770-pro-black-1-450x450-c.jpg',
        name: 'Beyerdynamic DT 990 PRO Black',
        cost: 4990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/43634/beyerdynamic-dt-990-pro-black-3-450x450-c.jpg',
        name: 'Beyerdynamic Blue Byrd (2nd generation)',
        cost: 6990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/38730/beyerdynamic-blue-byrd-2nd-generation-6-450x450-c.png',
        name: 'Beyerdynamic DT 900 PRO X',
        cost: 6990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/38156/beyerdynamic-dt-900-pro-x-1-450x450-c.jpg',
        name: 'Beyerdynamic DT 700 PRO X',
        cost: 24500000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/39252/beyerdynamic-ra-mat-tai-nghe-dt-700-pro-x-va-dt-900-pro-x-chuyen-dung-cho-phong-thu-2-450x450-c.jpg',
        name: 'Beyerdynamic T5 (3rd Generation)',
        cost: 24000000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/27377/beyerdynamic-t5-3rd-generation3-scaled-450x450-c.jpg',
        name: 'Beyerdynamic T1 (3rd Generation)',
        cost: 5500000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/27371/beyerdynamic-t1-3rd-generation9-scaled-450x450-c.jpg',
        name: 'Beyerdynamic DT880 Chrome',
        cost: 16500000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/11949/headphone-fullsize-beyerdynamic-dt880chrome-3kshop-1-450x450-c.png',
        name: 'Beyerdynamic Amiron Wireless',
        cost: 4790000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/11946/headphone-bluetooth-beyerdynamic-amironwireless-3kshop-1-450x450-c.png',
        name: 'Beyerdynamic DT 990 Pro',
        cost: 5500000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7870/3kshop-beyerdynamic-dt990-pro-1-450x450-c.jpg',
        name: 'Beyerdynamic DT 880 Edition',
        cost: 4790000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7867/3kshop-beyerdynamic-dt880-premium-1-450x450-c.jpg',
        name: 'Beyerdynamic DT 770 Pro',
        cost: 14990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7862/3kshop-beyerdynamic-dt770-pro-1-450x450-c.jpg',
        name: 'Beyerdynamic DT1770 Pro',
        cost: 23800000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7854/3kshop-beyerdynamic-dt1770-pro-1-450x450-c.jpg',
        name: 'Beyerdynamic T1 (2nd Generation)',
        cost: 4750000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7846/3kshop-beyerdynamic-t1-gen2-1-450x450-c.jpg',
        name: 'Beyerdynamic Custom One Pro Plus',
        cost: 3500000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7844/3kshop-beyer-dynamic-custom-one-pro-plus-450x450-c.jpg',
        name: 'Beyerdynamic Byron BTA',
        cost: 2400000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7837/3kshop-beyerdynamic-byron-bta-1-450x450-c.jpg',
        name: 'Beyerdynamic Byron BT',
        cost: 1250000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7831/3kshop-beyerdynamic-byron-bt-1-450x450-c.jpg',
        name: 'Beyerdynamic Byron Wired',
        cost: 14990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7825/3kshop-beyerdynamic-byron-1-450x450-c.jpg',
        name: 'Beyerdynamic DT1990 Pro',
        cost: 14150000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7820/3kshop-beyerdynamic-dt1990-pro-1-450x450-c.jpg',
        name: 'Beyerdynamic Amiron Home',
        cost: 12500000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7809/3kshop-beyerdynamic-amiron-home-1-450x450-c.jpg',
        name: 'Beyerdynamic Aventho Wireless',
        cost: 2990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7798/1-scaled-450x450-c.jpg',
        name: 'Beyerdynamic DT 240 Pro',
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7793/3kshop-beyerdynamic-dt240pro-4-scaled-450x450-c.jpg',
      },
    ],
  };
  constructor(private _activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.brandName = this._activeRoute.snapshot.paramMap.get('brandName') || '';
  }

  sortData() {
    console.log('sort');
  }

  filterData() {
    console.log('filter');
    //add pram brand
    //call api
  }
}
