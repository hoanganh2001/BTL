import { Component, Input, OnInit } from '@angular/core';
import { Constant } from 'src/app/shared/constant';
import { SectionData } from './item-list.type';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() section?: SectionData;
  videoSrc?: SafeResourceUrl;

  TYPE_LIST = Constant.TYPE_LIST;
  constructor(protected _sanitizer: DomSanitizer) {}

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
}
