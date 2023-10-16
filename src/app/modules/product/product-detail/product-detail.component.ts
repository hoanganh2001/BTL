import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/shared/constant';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  listImage = [
    {
      id: 0,
      title: '',
      src: 'https://3kshop.vn/wp-content/uploads/fly-images/50834/hifiman-he1000-stealth-magnet-02-100x100-c.jpeg',
      bigSrc:
        'https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-02.jpeg',
      active: true,
    },
    {
      id: 1,
      title: '',
      src: 'https://3kshop.vn/wp-content/uploads/fly-images/50835/hifiman-he1000-stealth-magnet-2-100x100-c.jpg',
      bigSrc:
        'https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-2.jpg',
      active: false,
    },
  ];

  history = {
    header: 'Sản phẩm đã xem',
    type: Constant.TYPE_LIST.PRODUCT_SLIDE,
    data: [
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52322/oladance_ows_pro__1__23f503f6148d4d92b37a42c5154c0c9b_master-450x450-c.jpg',
        name: 'Bang & Olufsen EX Ferrari',
        cost: 17980000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52021/bang-olufsen-ex-ferrari-2-450x450-c.png',
        name: 'iFi Zen One Studio',
        cost: 8990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51102/1-3-450x450-c.png',
        name: 'Noble Stage 3',
        cost: 14990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/50621/noble-stage-3-1-450x450-c.jpeg',
        name: 'Yamaha YH-G01',
        cost: 4580000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/50542/yamaha-yg-01-2-450x450-c.jpeg',
        name: 'Neumann KH 120 II',
        cost: 25000000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/49157/3kshop-neumann-kh-120-ii-1-450x450-c.png',
        name: 'Sennheiser IE 100 PRO',
        cost: 3090000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/31707/sennheiser-ie-100-pro-clear-1-450x450-c.jpg',
        name: 'Skullcandy Indy',
        cost: 2350000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/19643/skullcandy-indy-3kshop-3-450x450-c.jpg',
        name: 'Beyerdynamic Soul Byrd',
        cost: 2100000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7782/headphone-inear-beyerdynamic-soulbyrd-3kshop-1-450x450-c.jpg',
      },
    ],
  };

  concern = {
    header: 'Sản phẩm tương tự',
    type: Constant.TYPE_LIST.PRODUCT_SLIDE,
    data: [
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52322/oladance_ows_pro__1__23f503f6148d4d92b37a42c5154c0c9b_master-450x450-c.jpg',
        name: 'Bang & Olufsen EX Ferrari',
        cost: 17980000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52021/bang-olufsen-ex-ferrari-2-450x450-c.png',
        name: 'iFi Zen One Studio',
        cost: 8990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51102/1-3-450x450-c.png',
        name: 'Noble Stage 3',
        cost: 14990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/50621/noble-stage-3-1-450x450-c.jpeg',
        name: 'Yamaha YH-G01',
        cost: 4580000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/50542/yamaha-yg-01-2-450x450-c.jpeg',
        name: 'Neumann KH 120 II',
        cost: 25000000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/49157/3kshop-neumann-kh-120-ii-1-450x450-c.png',
        name: 'Sennheiser IE 100 PRO',
        cost: 3090000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/31707/sennheiser-ie-100-pro-clear-1-450x450-c.jpg',
        name: 'Skullcandy Indy',
        cost: 2350000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/19643/skullcandy-indy-3kshop-3-450x450-c.jpg',
        name: 'Beyerdynamic Soul Byrd',
        cost: 2100000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/7782/headphone-inear-beyerdynamic-soulbyrd-3kshop-1-450x450-c.jpg',
      },
    ],
  };

  selectedImage?: string;
  constructor() {}

  ngOnInit() {
    this.selectedImage = this.listImage[0].bigSrc;
    console.log(this.selectedImage);
  }

  updateImage(selectImage: any) {
    this.listImage.forEach((item) => {
      if (item.id === selectImage) {
        this.selectedImage = item.bigSrc;
        console.log(this.selectedImage);

        item.active = true;
      } else {
        item.active = false;
      }
    });
  }
}
