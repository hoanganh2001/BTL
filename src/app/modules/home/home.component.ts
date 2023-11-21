import { brandData } from './../brands/brand.types';
import { filter, map } from 'rxjs';
import { headerNavigation } from './../../mock-api/common/navigation/data';
import { Component, OnInit } from '@angular/core';
import { Constant } from 'app/shared/constant';
import { HomeService } from './home.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _homeService: HomeService) {}

  banner = [
    'assets/images/banner/Ưu-dãi-Neumman-mới.jpg',
    'assets/images/banner/FiiO-FX15.jpg',
    'assets/images/banner/FiiO-JW1.jpg',
    'assets/images/banner/FF1.jpg',
    'assets/images/banner/Devialet-Gemini.jpg',
    'assets/images/banner/banner-neumann-.jpg',
    'assets/images/banner/1-2.png',
    'assets/images/banner/BO-Ferrari-Collection.jpg',
  ];

  videoNew = {
    header: 'Tin tức sản phẩm',
    type: Constant.TYPE_LIST.VIDEO_NEW,
    data: [
      {
        id: 'zQfmQJIJYCw',
        title:
          '[UNBOXING] iFi Zen CAN Studio - Amplifier dành cho tai nghe phòng thu | 3Kshop.vn',
        author: '3KShop',
        view: 58,
      },
      {
        id: 'QGq6pfrCsfg',
        title:
          '[UNBOXING] HiFiMan Prelude - Ampli công suất cao cho tai nghe khó kéo, planar magnetic | 3Kshop.vn',
        author: '3KShop',
        view: 543,
      },
      {
        id: '-IDUb_EdcG4',
        title: 'So sánh nhanh ngoại hình Devialet Gemin I & II | 3Kshop.vn',
        author: '3KShop',
        view: 206,
      },
      {
        id: 'qK1m6gf-uGQ',
        title: 'So sánh JBL Tour Pro 2 vs Sony WF-1000XM5 (Phần 2) | 3Kshop.vn',
        author: '3KShop',
        view: 301,
      },
      {
        id: 'QqNjug2fWjc',
        title:
          'Giới thiệu các bạn vài món đồ chơi audio mới cập bến cuối tháng 08/2023 này | 3Kshop.vn',
        author: '3KShop',
        view: 169,
      },
      {
        id: 'O2TzrARY7qs',
        title:
          'Chủ nhật 26/08 này hẹn mọi người tại Chợ Lạc Xoong (Tinh Tế Cafe) | 3KShop.vn',
        author: '3KShop',
        view: 535,
      },
      {
        id: 'TWCIFu2GbaI',
        title:
          '[HOT DEAL] 2 chương trình siêu ưu đãi cuối tháng 08/2023 | 3KShop.vn',
        author: '3KShop',
        view: 55,
      },
      {
        id: 'ID2AFg-dqlY',
        title:
          'Mini-game 08/2023 | Quà tặng hấp dẫn, mọi người đừng bỏ lỡ nha | 3KShop.vn',
        author: '3KShop',
        view: 124,
      },
      {
        id: 'ZujdI-2Ikhw',
        title:
          '[CHIA SẺ] Màn hình của JBL Tour Pro 2 hữu dụng như thế nào? | 3KShop.vn',
        author: '3KShop',
        view: 205,
      },
      {
        id: 'Kt1lJvweAPI',
        title:
          '[CHIA SẺ] Mẹo nhỏ giúp giữ cho DAC/Amp luôn đẹp ngay từ khi mới khui hộp | 3KShop.vn',
        author: '3KShop',
        view: 329,
      },
      {
        id: '81I5QxikOms',
        title:
          '[NEW ARRIVALS] Hàng loạt sản phẩm HiFiMan vừa cập bến trong tháng 07/2023 | 3Kshop.vn',
        author: '3KShop',
        view: 179,
      },
      {
        id: 'B6R6_t7ibSY',
        title:
          '[HOT DEAL] Chương trình siêu ưu đãi cuối tháng 07/2023 | 3KShop.vn',
        author: '3KShop',
        view: 89,
      },
      {
        id: 'FwvJtyHqMf0',
        title:
          'FiiO SP3 (White) chính thức lên kệ tại thị trường Việt Nam | 3KShop.vn',
        author: '3KShop',
        view: 468,
      },
      {
        id: 'vP_DnXhg51Q',
        title:
          '[UNBOXING] Schiit Ragnarok 2 - Amplifier cao cấp dành cho tai nghe và loa passive | 3KShop.vn',
        author: '3KShop',
        view: 265,
      },
      {
        id: 't-8-8DXr2hU',
        title:
          '[UNBOXING] Schiit Yggdrasil+ - Bộ giải mã xứng tầm cho dàn âm thanh cao cấp | 3KShop.vn',
        author: '3KShop',
        view: 193,
      },
    ],
    mostViewProduct: {
      header: 'Sản phẩm được xem nhiều nhất tháng',
      data: [
        {
          img: 'https://3kshop.vn/wp-content/uploads/fly-images/51698/fiio-ff1-3-450x450-c.jpeg',
          name: 'FiiO FF1',
          view: 452,
        },
        {
          img: 'https://3kshop.vn/wp-content/uploads/fly-images/31707/sennheiser-ie-100-pro-clear-1-450x450-c.jpg',
          name: 'Sennheiser IE 100 PRO',
          view: 210,
        },
        {
          img: 'https://3kshop.vn/wp-content/uploads/fly-images/52379/Screen-Shot-2023-10-04-at-17.06.00-450x450-c.png',
          name: 'ddHiFi TC01C',
          view: 197,
        },
        {
          img: 'https://3kshop.vn/wp-content/uploads/fly-images/46341/3kshop-audeze-maxwell-3-1-450x450-c.png',
          name: 'Audeze Maxwell (PlayStation/PC)',
          view: 187,
        },
        {
          img: 'https://3kshop.vn/wp-content/uploads/fly-images/10042/loa-bookshelf-audioengine-a2-red-3kshop-2-450x450-c.jpg',
          name: 'Audioengine A2+',
          view: 181,
        },
        {
          img: 'https://3kshop.vn/wp-content/uploads/fly-images/42534/DSC9263-1-450x450-c.jpg',
          name: 'iFi Go Bar',
          view: 180,
        },
        {
          img: 'https://3kshop.vn/wp-content/uploads/fly-images/48433/spinfit-superfine-2-450x450-c.jpeg',
          name: 'SpinFit SuperFine',
          view: 173,
        },
        {
          img: 'https://3kshop.vn/wp-content/uploads/fly-images/52429/ddhifi-tc35-pro-mountain-2-450x450-c.jpg',
          name: 'HiFi TC35 Pro Mountain 2 USB-C',
          view: 158,
        },
      ],
    },
  };

  newProduct = {
    header: 'Sản phẩm mới',
    type: Constant.TYPE_LIST.PRODUCT,
    isFirst: true,
    data: [],
  };

  new = {
    header: 'TIN TỨC',
    type: Constant.TYPE_LIST.NEW,
    data: [
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52539/3kshop-ferrum-wandla-hypsosDSC-7459-500x309-c.jpg',
        title:
          'FERRUM WANDLA – DAC VÀ PREAMPLIFIER TUYỆT VỜI CHO NGƯỜI CHƠI LOA ACTIVE',
        description:
          'Gần Đây Loa Chính Mình Dùng Để Nghe Nhạc Và Xem Phim Là Neumann KH',
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52524/3kshop-fiio-fx15-tai-nghe-iem-in-ear_13-500x309-c.jpg',
        title:
          'TRÊN TAY TAI NGHE FIIO FX15: THIẾT KẾ ÂM THANH TRIBRID, GIÁ ~20TR',
        description:
          'FX15 Là Tai Nghe Có Thiết Kế Tribrid Đầu Tiên Của FiiO, Ứng Dụng Ba Loại Driver Gồm: Một Dynamic, Một',
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52520/3kshop-ifi-hip-dac-3_3-scaled-500x309-c.jpg',
        title:
          'IFI HIP DAC 3: MÀU MỚI, DÙNG USB-C, NÂNG CẤP MẠCH TẠO XUNG, CÓ IEMATCH, GIÁ $199',
        description:
          'Sau Thành Công Của Hip Dac 1 Và 2, Hip Dac 3 Được Ra Mắt Với Một',
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52487/3kshop-shure-sm7db-audio-500x309-c.jpg',
        title:
          'SHURE RA MẮT SM7DB: VOCAL MICROPHONE CHO NHU CẦU THU ÂM CA HÁT, LÀM PODCAST, CÓ TÍCH HỢP PREAMP',
        description:
          'Shure SM7 Là Microphone Nổi Tiếng Của Hãng Cho Nhu Cầu Thu Âm, Làm Truyền Hình, Thu Podcast, Video Nhưng Thường',
      },
    ],
  };

  featureProduct = {
    header: 'Sản phẩm nổi bật',
    type: Constant.TYPE_LIST.PRODUCT,
    data: [],
  };

  analogProduct = {
    header: 'Sản phẩm Analog',
    type: Constant.TYPE_LIST.PRODUCT,
    data: [],
  };

  topBannerAds = [
    {
      img: 'https://3kshop.vn/wp-content/uploads/2022/12/ifi-uno.png',
      url: '',
    },
    {
      img: 'https://3kshop.vn/wp-content/uploads/2022/12/ifi-uno-1.png',
      url: '',
    },
  ];

  bannerAds = [
    {
      img: 'https://3kshop.vn/wp-content/uploads/2021/04/VinylSaigon.png',
      url: '',
    },
    {
      img: 'https://3kshop.vn/wp-content/uploads/2021/04/iCamp.png',
      url: '',
    },
  ];
  bodyProductSearch: any;

  ngOnInit() {
    this.getNewProduct();
    this.getfeatureProduct();
    this.getAnalogProduct();
  }

  getNewProduct() {
    const body = {
      limit: 9,
      offset: 0,
    };
    this._homeService.getItemsOnSearch(body).subscribe({
      next: (res) => {
        if (res) {
          this.newProduct.data = res;
        }
      },
    });
  }

  getfeatureProduct() {
    const body = {
      limit: 11,
      offset: 0,
      sort_by: 'view_number',
    };
    this._homeService.getItemsOnSearch(body).subscribe({
      next: (res) => {
        if (res) {
          this.featureProduct.data = res;
        }
      },
    });
  }

  getAnalogProduct() {
    const body = {
      limit: 11,
      offset: 0,
      category_name: 'analog',
    };
    this._homeService.getItemsOnSearch(body).subscribe({
      next: (res) => {
        if (res) {
          this.analogProduct.data = res;
        }
      },
    });
  }
}
