import { filter } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/shared/constant';
import { filterData } from './category.type';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  sortOption = [
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
  ];

  categories = [
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
  ];

  filterList: filterData[] = [
    {
      id: 'brand',
      name: 'Thương hiệu',
      type: 'multi_checkbox',
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
      name: 'headphone type',
      type: 'multi_checkbox',
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
      name: 'headphone feature',
      type: 'multi_checkbox',
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
      name: 'giá tiền',
      type: 'rangeInput',
      options: [],
    },
  ];

  productList = {
    type: Constant.TYPE_LIST.PRODUCT_ONLY,
    data: [
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51698/fiio-ff1-3-450x450-c.jpeg',
        name: 'FiiO FF1',
        cost: 750000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/45408/tainghejadeaudiojd3-450x450-c.jpg',
        name: 'Jade Audio JD3',
        cost: 600000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/30641/jlab-go-air-450x450-c.jpg',
        name: 'JLAB Go Air',
        cost: 1.0,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/25315/3kshop_skullcandy_inkd-2-450x450-c.jpg',
        name: "Skullcandy Ink'd+",
        cost: 520000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/23572/headphone-inear-sennheiser-cx80s-3kshop-1-450x450-c.jpg',
        name: 'Sennheiser CX 80S',
        cost: 630000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/20668/headphone-bluetooth-sony-wfh800-3kshop-1-450x450-c.jpg',
        name: 'Sony WF-H800',
        cost: 790000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/19362/headphone-bluetooth-sony-wic200-3kshop-1-450x450-c.jpg',
        name: 'Sony WI-C200',
        cost: 350000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/21059/headphone-inear-sony-ex155ap-3kshop-1-450x450-c.jpg',
        name: 'Sony MDR-EX155AP',
        cost: 800000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/16466/headphone-bluetooth-beoplay-e8v2-3kshop-1-450x450-c.jpg',
        name: 'Bang & Olufsen Beoplay E8 2.0',
        cost: 850000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/16459/headphone-bluetooth-sony-wic600n-3kshop-13-450x450-c.jpg',
        name: 'Sony WI-C600N',
        cost: 890000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/11876/headphone-bluetooth-klipsch-t5wireless-3kshop-2-scaled-450x450-c.jpg',
        name: 'Klipsch T5 Sport',
        cost: 800000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/11873/headphone-inear-klipsch-t5wired-3kshop-1-scaled-450x450-c.jpg',
        name: 'Klipsch T5M',
        cost: 800000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/11868/headphone-bluetooth-klipsch-t5neckband-3kshop-2-scaled-450x450-c.jpg',
        name: 'Klipsch T5 Neckband',
        cost: 550000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/11781/headphone-inear-skullcandy-setsport-3kshop-5-450x450-c.jpg',
        name: 'Skullcandy Set Sport',
        cost: 800000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/8714/3kshop-yuin-pk3-450x450-c.png',
        name: 'Yuin PK3',
        cost: 1.0,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/8619/3kshop-headphone-inear-sony-xb55ap-450x450-c.jpg',
        name: 'Sony MDR-XB55AP',
        cost: 490000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/8508/3kshop-tai-nghe-iphone-skullcandy-method-5-450x450-c.jpg',
        name: 'Skullcandy Method',
        cost: 700000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/8503/3kshop-tai-nghe-iphone-skullcandy-smoking-buds-2-450x450-c.jpg',
        name: 'Skullcandy Smokin Buds 2',
        cost: 450000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/8496/3kshop-tai-nghe-iphone-skullcandy-inkd2-4-450x450-c.jpg',
        name: 'Skullcandy INKD 2',
        cost: 600000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/17754/rha-ma-390-3kshop-11-450x450-c.jpg',
        name: 'RHA MA390 Universal',
        cost: 400000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/8386/3-4-450x450-c.jpg',
        name: 'RHA S500 Universal',
        cost: 350000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/8322/3kshop-radius-hp-nef11-0-450x450-c.jpg',
        name: 'Radius HP-NEF11',
        cost: 990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/8320/3kshop-radius-hp-nef31-450x450-c.jpg',
        name: 'Radius HP-NEF31',
        cost: 630000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/8094/3kshop-tai-nghe-in-ear-fiio-f1-450x450-c.jpg',
        name: 'FiiO F1',
        cost: 7.59,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/8086/3kshop-inear-headphone-fiio-f3-8-450x450-c.jpg',
        name: 'FiiO F3',
        cost: 17.98,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/8068/headphone-earbud-fiio-em3k-3kshop-copy-450x450-c.jpg',
        name: 'FiiO EM3S',
        cost: 8.99,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/8068/headphone-earbud-fiio-em3k-3kshop-copy-450x450-c.jpg',
        name: 'FiiO EM3K',
        cost: 14.99,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/8062/headphone-bluetooth-fiio-fb1-3kshop-20-450x450-c.jpg',
        name: 'FiiO FB1',
        cost: 4.58,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/36384/Headphone-Zone-beyerdynamic-beat-byrd-1160-1160-6_2000x-450x450-c.jpg',
        name: 'Beyerdynamic Beat Byrd',
        cost: 25.0,
      },
    ],
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
