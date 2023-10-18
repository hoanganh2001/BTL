import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constant } from 'src/app/shared/constant';
import { SectionData } from './item-list.type';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import RouterConfig from 'src/app/core/config/router.config';
import { Router } from '@angular/router';

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
  constructor(protected _sanitizer: DomSanitizer, private _router: Router) {}

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

  favoriteAction(icon: any) {
    icon.style.color = icon.style.color ? '' : 'red';
  }

  addToCart(id: any) {
    console.log(id);
  }

  clickAllBtn(id: string) {
    this.handelBtnAction.emit(id);
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

  redirectToDetail(id: any) {
    this._router.navigateByUrl(this._router.url + '/detail');
  }
}
