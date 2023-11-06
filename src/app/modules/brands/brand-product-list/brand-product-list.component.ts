import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constant } from 'src/app/shared/constant';

@Component({
  selector: 'app-brand-product-list',
  templateUrl: './brand-product-list.component.html',
  styleUrls: ['./brand-product-list.component.scss'],
})
export class BrandProductListComponent implements OnInit {
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

  type = [
    { id: 1, name: 'Full size', category_type_id: 1 },
    { id: 2, name: 'on ear', category_type_id: 1 },
    { id: 3, name: 'earbud', category_type_id: 1 },
    { id: 4, name: 'in ear', category_type_id: 1 },
    { id: 5, name: 'wireless', category_type_id: 1 },
    { id: 6, name: 'true wireless', category_type_id: 1 },
    { id: 7, name: 'custome in ear', category_type_id: 1 },
    { id: 8, name: 'Desktop DAC', category_type_id: 2 },
    { id: 9, name: 'Portable DAC/Amp', category_type_id: 2 },
    { id: 10, name: 'Portable Amplifier', category_type_id: 2 },
    { id: 11, name: 'Headphone Amplifier', category_type_id: 2 },
    { id: 12, name: 'Speakers Amplifier', category_type_id: 2 },
    { id: 13, name: 'Transport', category_type_id: 2 },
    { id: 14, name: 'Preamp', category_type_id: 2 },
    { id: 15, name: 'Bluetooth Receiver', category_type_id: 2 },
    { id: 16, name: 'Bluetooth Transmitter', category_type_id: 2 },
    { id: 17, name: 'Loseless Player', category_type_id: 3 },
    { id: 18, name: '24BIT Player', category_type_id: 3 },
    { id: 19, name: 'DSD Player', category_type_id: 3 },
    { id: 20, name: 'Conference Speaker', category_type_id: 4 },
    { id: 21, name: 'Portable Speaker', category_type_id: 4 },
    { id: 22, name: 'Smart Home Speaker', category_type_id: 4 },
    { id: 23, name: 'Computer Speaker', category_type_id: 4 },
    { id: 24, name: 'Bookshelf Speaker', category_type_id: 4 },
    { id: 25, name: 'Home Theater Speaker', category_type_id: 4 },
    { id: 26, name: 'Soundbars', category_type_id: 4 },
    { id: 27, name: 'Subwoofer', category_type_id: 4 },
    { id: 28, name: 'Floor Standing Speaker', category_type_id: 4 },
    { id: 29, name: 'Active Speaker', category_type_id: 4 },
    { id: 30, name: 'Wireless Speaker', category_type_id: 4 },
    { id: 31, name: 'MM', category_type_id: 5 },
    { id: 32, name: 'MC', category_type_id: 5 },
    { id: 33, name: '4.4mm', category_type_id: 6 },
    { id: 34, name: 'Wireless', category_type_id: 6 },
    { id: 35, name: '2-pin connector', category_type_id: 6 },
    { id: 36, name: '2.5mm connector', category_type_id: 6 },
    { id: 37, name: '3.5mm connector', category_type_id: 6 },
    { id: 38, name: 'MMCX connector', category_type_id: 6 },
    { id: 39, name: 'Bluetooth cable', category_type_id: 6 },
    { id: 40, name: 'Apple Lightning cable', category_type_id: 6 },
    { id: 41, name: '7 IC', category_type_id: 7 },
    { id: 42, name: '7 Loa', category_type_id: 7 },
    { id: 43, name: '7 Coaxial', category_type_id: 7 },
    { id: 44, name: '7 optical', category_type_id: 7 },
    { id: 45, name: '7 USB', category_type_id: 7 },
    { id: 46, name: 'Microphone', category_type_id: 8 },
    { id: 47, name: 'Ear tips', category_type_id: 8 },
    { id: 48, name: 'Ear pads', category_type_id: 8 },
    { id: 49, name: 'Hộp đựng', category_type_id: 8 },
    { id: 50, name: 'Leather case', category_type_id: 8 },
    { id: 51, name: 'Lọc nhiễu', category_type_id: 8 },
    { id: 52, name: 'Adapter nguồn', category_type_id: 8 },
  ];

  feature = [
    {
      id: 1,
      name: 'Chống ồn',
      category_feature_id: 1,
    },
    {
      id: 2,
      name: 'Không dây',
      category_feature_id: 1,
    },
    {
      id: 3,
      name: 'Có micro',
      category_feature_id: 1,
    },
    {
      id: 4,
      name: 'Có tăng giảm âm lượng',
      category_feature_id: 1,
    },
    {
      id: 5,
      name: 'Tai nghe thể thao',
      category_feature_id: 1,
    },
    {
      id: 6,
      name: 'Tai nghe DJ',
      category_feature_id: 1,
    },
    {
      id: 7,
      name: 'Tai nghe phòng thu',
      category_feature_id: 1,
    },
    {
      id: 8,
      name: 'Tai nghe Gaming',
      category_feature_id: 1,
    },
    {
      id: 9,
      name: 'Streaming DAC',
      category_feature_id: 2,
    },
    {
      id: 10,
      name: 'DSD Suport',
      category_feature_id: 2,
    },
    {
      id: 11,
      name: 'R2R ladder DAC',
      category_feature_id: 2,
    },
    {
      id: 12,
      name: 'Pre Out',
      category_feature_id: 2,
    },
    {
      id: 13,
      name: 'Bluetooth',
      category_feature_id: 2,
    },
    {
      id: 14,
      name: 'Wifi',
      category_feature_id: 2,
    },
    {
      id: 15,
      name: 'Tube amp',
      category_feature_id: 2,
    },
    {
      id: 16,
      name: 'Solid amp',
      category_feature_id: 2,
    },
    {
      id: 17,
      name: 'Tích hợp Phono',
      category_feature_id: 2,
    },
    {
      id: 18,
      name: 'USB power supply',
      category_feature_id: 2,
    },
    {
      id: 19,
      name: 'Power Filter',
      category_feature_id: 2,
    },
    {
      id: 20,
      name: 'Digital Filter',
      category_feature_id: 2,
    },
    {
      id: 21,
      name: 'Touchscreen',
      category_feature_id: 3,
    },
    {
      id: 22,
      name: 'Native DSD',
      category_feature_id: 3,
    },
    {
      id: 23,
      name: 'Bluetooth',
      category_feature_id: 3,
    },
    {
      id: 24,
      name: 'Wifi',
      category_feature_id: 3,
    },
    {
      id: 25,
      name: 'OTG Support',
      category_feature_id: 3,
    },
    {
      id: 26,
      name: 'USB DAC',
      category_feature_id: 3,
    },
    {
      id: 27,
      name: 'Line out',
      category_feature_id: 3,
    },
    {
      id: 28,
      name: 'Balance out',
      category_feature_id: 3,
    },
    {
      id: 29,
      name: 'Digital out',
      category_feature_id: 3,
    },
    {
      id: 30,
      name: 'Bluetooth',
      category_feature_id: 4,
    },
    {
      id: 31,
      name: 'Airplay',
      category_feature_id: 4,
    },
    {
      id: 32,
      name: 'Wifi',
      category_feature_id: 4,
    },
    {
      id: 33,
      name: 'Multi-room',
      category_feature_id: 4,
    },
    {
      id: 34,
      name: 'Tích hợp DAC',
      category_feature_id: 4,
    },
    {
      id: 35,
      name: 'Tích hợp Amply',
      category_feature_id: 4,
    },
    {
      id: 36,
      name: 'Tích hợp Phono',
      category_feature_id: 4,
    },
    {
      id: 37,
      name: 'Trợ lý ảo',
      category_feature_id: 4,
    },
    {
      id: 38,
      name: 'Digital Output',
      category_feature_id: 5,
    },
    {
      id: 39,
      name: 'Bluetooth',
      category_feature_id: 5,
    },
    {
      id: 40,
      name: 'Tích hợp Phono',
      category_feature_id: 5,
    },
    {
      id: 41,
      name: 'Tích hợp Tonearm',
      category_feature_id: 5,
    },
    {
      id: 42,
      name: 'Tích hợp Cartridge',
      category_feature_id: 5,
    },
    {
      id: 43,
      name: 'Phono stage',
      category_feature_id: 6,
    },
  ];

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
    let head = `switch(e?.innerText.toLowerCase()) {`;
    let foot = '}';
    let body = '';
    let currId = 1;
    this.feature.forEach((item) => {
      if (item.category_feature_id === currId) {
        body += `case '${item.name.toLocaleLowerCase()}': {feature = ${
          item.id
        };break;}`;
      } else {
        console.log(head + body + foot);
        body = '';
        currId = item.category_feature_id;
      }
    });
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
