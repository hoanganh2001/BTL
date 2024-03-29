import { OrderService } from './../../../modules/order/order.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constant } from 'app/shared/constant';
import { SectionData } from './item-list.type';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import RouterConfig from 'app/core/config/router.config';
import { Router } from '@angular/router';
import { ProductService } from 'app/modules/products/products.service';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() section?: SectionData;
  @Input() column?: number;
  @Output() handelBtnAction = new EventEmitter();
  videoSrc?: SafeResourceUrl;
  currItemSlide?: number;
  firstPrv: boolean = true;
  readonly TYPE_LIST = Constant.TYPE_LIST;
  readonly RouterConfig = RouterConfig;
  constructor(
    protected _sanitizer: DomSanitizer,
    private _router: Router,
    private _orderService: OrderService,
    private _productService: ProductService,
  ) {}

  ngOnInit() {
    this.playSelectedVideo();
  }

  getDiscountPrice(cost: number, discount: number): number {
    return cost * (1 - discount / 100);
  }

  playSelectedVideo(id?: string): void {
    if (id) {
      this.videoSrc = this._sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/' + id + '?autoplay=1',
      );
    } else {
      this.videoSrc = this._sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/' + this.section?.data[0]?.id,
      );
    }
  }

  favoriteAction(event, id: number) {
    event.stopPropagation();
    this._productService.addWistList(id).subscribe((res) => {
      this.section.data.map((t) => {
        t.isFavorite = t.id === id;
        return t;
      });
    });
  }

  addToCart(event, id: number) {
    event.stopPropagation();
    this._orderService.addToCart(id);
  }

  clickAllBtn(link: string) {
    this.handelBtnAction.emit(link);
  }

  scroll(a: any, i: number) {
    if (this.currItemSlide === a.children.length - 1 && i !== -1) return;
    if (!this.currItemSlide) {
      if (i === -1) return;
      this.currItemSlide = a.clientWidth / a.children[0].offsetWidth - 1 - 1;
    }
    if (i === -1 && this.firstPrv) {
      this.currItemSlide = this.currItemSlide + i - 4;
      this.firstPrv = false;
    } else
      this.currItemSlide =
        i !== -1 ? this.currItemSlide + i : this.currItemSlide + i;
    if (i === 1) this.firstPrv = true;
    a.children[this.currItemSlide].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  redirectToDetail(id: number) {
    this._router.navigateByUrl(this.RouterConfig.PRODUCT_DETAIL + id);
  }

  getImgUrl(id: string): string {
    return (
      (id?.includes('/')
        ? Constant.IMG_DIR.SHOP
        : Constant.IMG_DIR.GOOGLE_DRIVE) + id
    );
  }
}
