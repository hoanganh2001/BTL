import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Constant } from 'app/shared/constant';
import { ProductService } from '../products.service';
import { map } from 'rxjs';
import { productData } from '../products.type';
import { OrderService } from '../../order/order.service';
import { ActivatedRoute } from '@angular/router';

const areas = 'description,specifications';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  @ViewChildren(areas) sections?: QueryList<ElementRef>;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const activeSection = this.sections
      ?.toArray()
      .findIndex((section) => this.isElementInViewport(section));

    this.detail.forEach((item) => {
      item.active = areas.split(',')[activeSection!] === item.id;
    });
  }

  productDetail: productData;

  isElementInViewport(el?: ElementRef) {
    var rect = el?.nativeElement?.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >=
        (window.innerHeight * 0.5 ||
          document.documentElement.clientHeight * 0.5)
    );
  }
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

  detail = [
    {
      id: 'description',
      name: 'Thông tin chi tiết',
      content: ``,
      active: true,
    },
    {
      id: 'specification',
      name: ' Thông số kỹ thuật',
      content: ``,
      active: false,
    },
  ];
  showMore: boolean = false;
  selectedImage?: string;
  productID?: number;

  constructor(
    private _sanitized: DomSanitizer,
    private _productService: ProductService,
    private _orderService: OrderService,
    private _activeRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.productID = +this._activeRoute.snapshot.paramMap.get('productId');
    this.getProductDetail(this.productID);
    this.selectedImage = this.listImage[0].bigSrc;
  }

  getProductDetail(id: number) {
    this._productService
      .getProductDetail(id)
      .pipe(map((res) => res.data))
      .subscribe((res) => {
        if (res) {
          this.productDetail = res;
          this.detail = this.detail.map((item) => {
            item.content = this.productDetail[item.id];
            return item;
          });
        }
      });
  }

  updateImage(selectImage: any) {
    this.listImage.forEach((item) => {
      if (item.id === selectImage) {
        this.selectedImage = item.bigSrc;
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }

  scrollTo(el: HTMLElement, id: string) {
    el.scrollIntoView({ behavior: 'smooth' });
    this.detail.forEach((item) => {
      item.active = item.id === id;
    });
  }

  safeHTML(content: string): SafeHtml {
    return this._sanitized.bypassSecurityTrustHtml(content);
  }

  showmore(): void {
    this.showMore = true;
  }
  hideShowMoreBtn(el: HTMLElement): boolean {
    return (
      this.showMore || (!this.showMore && el.offsetHeight === el.scrollHeight)
    );
  }

  addToCart(id: number) {
    this._orderService.addToCart(id);
  }
}
