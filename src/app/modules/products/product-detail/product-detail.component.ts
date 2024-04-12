import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Constant, getImgUrl } from 'app/shared/constant';
import { ProductService } from '../products.service';
import { map } from 'rxjs';
import { productData } from '../products.type';
import { OrderService } from '../../order/order.service';
import { ActivatedRoute } from '@angular/router';

const areas = 'description,specification';
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
      item.active =
        areas.split(',')[activeSection]?.toLowerCase() ===
        item.id?.toLowerCase();
    });
  }

  productDetail: productData;

  isElementInViewport(el?: ElementRef) {
    var rect = el?.nativeElement?.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >=
        (window.innerHeight * 0.3 ||
          document.documentElement.clientHeight * 0.3)
    );
  }
  listImage = [
    {
      id: 0,
      title: '',
      src: '50834/hifiman-he1000-stealth-magnet-02-100x100-c.jpeg',
      bigSrc:
        'https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-02.jpeg',
      active: true,
    },
    {
      id: 1,
      title: '',
      src: '50835/hifiman-he1000-stealth-magnet-2-100x100-c.jpg',
      bigSrc:
        'https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-2.jpg',
      active: false,
    },
  ];

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
  }

  getProductDetail(id: number) {
    this._productService
      .getProductDetail(id)
      .pipe(map((res) => res.data))
      .subscribe((res) => {
        if (res) {
          this.productDetail = res;
          this.listImage = res.image.map((i) => ({
            id: i.id,
            title: this.productDetail.name,
            src: getImgUrl(i.file_id),
            active: false,
          }));
          this.selectedImage = this.listImage[0].src;
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
        this.selectedImage = item.src;
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }

  scrollTo(el: HTMLElement, id: string) {
    el?.scrollIntoView({ behavior: 'smooth' });
    this.detail.forEach((item) => {
      item.active = item.id === id;
    });
    console.log(this.detail);
  }

  safeHTML(content: string): SafeHtml {
    return this._sanitized.bypassSecurityTrustHtml(content);
  }

  showmore(): void {
    this.showMore = true;
  }
  hideShowMoreBtn(el: HTMLElement): boolean {
    return (
      this.showMore || (!this.showMore && el?.offsetHeight === el?.scrollHeight)
    );
  }

  addToCart(id: number) {
    this._orderService.addToCart(id);
  }
}
