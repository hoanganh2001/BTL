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
      content: `<div class="content view-more-able active">
  <p>
    HiFiMan HE1000 Stealth Magnet sử dụng màng loa có độ dày cực mỏng
    với đơn vị nanomet, mang đến âm thanh vượt trội. Bên cạnh đó, sản
    phẩm được thiết kế với hai loại phích cắm khác nhau: ¼” (mini
    6,35mm) và đầu nối XLR 4 chân để có thể sử dụng với nhiều loại thiết
    bị.
  </p>
  <h2>Tổng quan tai nghe HiFiMan HE1000 Stealth Magnet</h2>
  <h3>1.Màng ngăn độ dày nanomet</h3>
  <p>
    Với <a href="https://3kshop.vn/hifiman">HiFiMan</a> HE1000 Stealth
    Magnet, màng chúng tôi sử dụng rất mỏng, nó là một màng chắn có độ
    dày nanomet, đây là công nghệ cốt lõi mang tính đột phá do HIFIMAN
    phát triển và là loại đầu tiên được ứng dụng trong tai nghe. Việc sử
    dụng vật liệu này mang tính thử thách khá cao vì đây là vật liệt
    mới; tuy nhiên việc kết hợp thành công film này với vai trò là trình
    điều khiển phẳng của HiFiMan HE1000 đã mang đến một thành tựu nhất
    định.
  </p>
  <h3>
    <img
      loading="lazy"
      class="aligncenter wp-image-50823 size-full"
      src="https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-01.png"
      alt=""
      width="1324"
      height="1324"
      srcset="
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-01.png           1324w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-01-300x300.png    300w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-01-1024x1024.png 1024w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-01-150x150.png    150w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-01-768x768.png    768w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-01-600x600.png    600w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-01-100x100.png    100w
      "
      sizes="(max-width: 1324px) 100vw, 1324px"
    /><img
      loading="lazy"
      class="aligncenter wp-image-50824 size-full"
      src="https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-02.png"
      alt=""
      width="1324"
      height="1510"
      srcset="
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-02.png          1324w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-02-263x300.png   263w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-02-898x1024.png  898w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-02-768x876.png   768w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-02-600x684.png   600w
      "
      sizes="(max-width: 1324px) 100vw, 1324px"
    /><img
      loading="lazy"
      class="aligncenter wp-image-50825 size-full"
      src="https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-03.png"
      alt=""
      width="1324"
      height="1054"
      srcset="
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-03.png          1324w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-03-300x239.png   300w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-03-1024x815.png 1024w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-03-768x611.png   768w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-03-600x478.png   600w
      "
      sizes="(max-width: 1324px) 100vw, 1324px"
    />
  </h3>
  <h3>2.Thiết kế nam châm tàng hình</h3>
  <p>
    Không giống như sóng âm do nam châm thông thường tạo ra, hình dạng
    đặc biệt của Nam châm tàng hình cho phép sóng truyền qua nam châm mà
    không gây nhiễu. Thiết kế nam châm tiên tiến của HiFiMan HE1000
    Stealth Magnet là trong suốt về mặt âm thanh, giảm đáng kể nhiễu
    loạn nhiễu sóng làm suy giảm tính toàn vẹn của sóng âm thanh. Độ méo
    giảm mang lại đầu ra âm thanh thuần khiết, chính xác và toàn dải.
  </p>
  <h3>
    <img
      loading="lazy"
      class="aligncenter wp-image-50826 size-full"
      src="https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-04.png"
      alt=""
      width="1324"
      height="1168"
      srcset="
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-04.png          1324w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-04-300x265.png   300w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-04-1024x903.png 1024w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-04-768x678.png   768w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-04-600x529.png   600w
      "
      sizes="(max-width: 1324px) 100vw, 1324px"
    /><img
      loading="lazy"
      class="aligncenter wp-image-50829 size-full"
      src="https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-07.png"
      alt=""
      width="1324"
      height="1546"
      srcset="
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-07.png           1324w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-07-257x300.png    257w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-07-877x1024.png   877w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-07-768x897.png    768w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-07-1315x1536.png 1315w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-07-600x701.png    600w
      "
      sizes="(max-width: 1324px) 100vw, 1324px"
    />
  </h3>
  <h3>
    <img
      loading="lazy"
      class="aligncenter wp-image-50830 size-full"
      src="https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-08.png"
      alt=""
      width="1324"
      height="1546"
      srcset="
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-08.png           1324w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-08-257x300.png    257w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-08-877x1024.png   877w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-08-768x897.png    768w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-08-1315x1536.png 1315w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-08-600x701.png    600w
      "
      sizes="(max-width: 1324px) 100vw, 1324px"
    />
  </h3>
  <h3>3.Thiết kế thủ công</h3>
  <p>
    Cấu trúc kim loại được tạo ra thông qua phay CNC và đánh bóng bằng
    tay. Để đáp ứng tiêu chuẩn quan trọng do HIFIMAN đặt ra, lớp hoàn
    thiện bề mặt được xử lý và tinh chỉnh bởi những người thợ thủ công
    tỉ mỉ. Với thiết kế độc đáo, chức năng đặc biệt và sự khéo léo tinh
    tế, HiFiMan HE1000 Stealth Magnet là món đồ xa xỉ hoàn toàn định
    nghĩa lại bối cảnh âm thanh.
  </p>
  <p>
    Headband được thiết kế tiện dụng và thoải mái cho hầu hết mọi người,
    với độ tin cậy và độ bền cao hơn.
  </p>
  <p>
    Thiết kế đầu nối có thể thay thế với hai loại phích cắm khác nhau:
    ¼” (mini 6,35mm) và đầu nối XLR 4 chân để có thể sử dụng với nhiều
    loại thiết bị. Các phích cắm dễ dàng chuyển đổi và kết nối nhanh
    chóng với các loại cáp và bộ khuếch đại khác nhau.<img
      loading="lazy"
      class="aligncenter wp-image-50831 size-full"
      src="https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-09.png"
      alt=""
      width="1324"
      height="1310"
      srcset="
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-09.png           1324w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-09-300x297.png    300w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-09-1024x1013.png 1024w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-09-768x760.png    768w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-09-600x594.png    600w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-09-100x100.png    100w
      "
      sizes="(max-width: 1324px) 100vw, 1324px"
    /><img
      loading="lazy"
      class="aligncenter wp-image-50833 size-full"
      src="https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-11.png"
      alt=""
      width="1324"
      height="1056"
      srcset="
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-11.png          1324w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-11-300x239.png   300w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-11-1024x817.png 1024w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-11-768x613.png   768w,
        https://3kshop.vn/wp-content/uploads/2023/07/hifiman-he1000-stealth-magnet-11-600x479.png   600w
      "
      sizes="(max-width: 1324px) 100vw, 1324px"
    />
  </p>
</div>`,
      active: true,
    },
    {
      id: 'specifications',
      name: ' Thông số kỹ thuật',
      content: `<table>
  <tbody>
    <tr>
      <th>Model:</th>
      <td>HiFiMan HE1000 Stealth Magnet</td>
    </tr>
    <tr>
      <th>Frequency Response:</th>
      <td>8Hz-65kHz</td>
    </tr>
    <tr>
      <th>Impedance:</th>
      <td>32Ohms</td>
    </tr>
    <tr>
      <th>Sensitivity:</th>
      <td>93dB</td>
    </tr>
    <tr>
      <th>Weight:</th>
      <td>458g</td>
    </tr>
  </tbody>
</table>`,
      active: false,
    },
  ];
  showMore: boolean = false;
  selectedImage?: string;
  constructor(private _sanitized: DomSanitizer) {}

  ngOnInit() {
    this.selectedImage = this.listImage[0].bigSrc;
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
}
