import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import RouterConfig from 'src/app/core/config/router.config';
import { Constant } from 'src/app/shared/constant';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  headphone = {
    header: 'headphone',
    type: Constant.TYPE_LIST.PRODUCT,
    isFirst: true,
    data: [
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52021/bang-olufsen-ex-ferrari-2-450x450-c.png',
        name: 'Bang & Olufsen EX Ferrari',
        cost: 7590000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52013/bang-olufsen-beoplay-h95-ferrari-edition-1-450x450-c.jpeg',
        name: 'Bang & Olufsen Beoplay H95 Ferrari Edition',
        cost: 17980000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51991/tai-nghe-devialet-gemini-ii-new-2023-P9364-1692345929807-450x450-c.jpg',
        name: 'Devialet Gemini II (Opéra de Paris)',
        cost: 42820000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51976/devialet-gemini-ii-1-450x450-c.jpeg',
        name: 'Devialet Gemini II ',
        cost: 17890000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51976/devialet-gemini-ii-1-450x450-c.jpeg',
        name: 'Devialet Gemini II',
        cost: 11590000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51908/Hifiman-HE1000SE-1-450x450-c.jpg',
        name: 'HiFiMan HE1000 SE',
        cost: 11590000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51876/noble-spartacus-1-450x450-c.jpeg',
        name: 'Noble Spartacus',
        cost: 45000000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51698/fiio-ff1-3-450x450-c.jpeg',
        name: 'FiiO FF1',
        cost: 79990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51318/fiio-jw1-1-450x450-c.jpeg',
        name: 'FiiO JW1',
        cost: 49900000,
      },
    ],
  };

  DAC = {
    header: 'DAC/AMP',
    type: Constant.TYPE_LIST.PRODUCT,
    isFirst: true,
    data: [
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51595/WANDLA-450x450-c.png',
        name: 'Ferrum Erco',
        cost: 83900000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51589/IMG_0206-450x450-c.jpg',
        name: 'Ferrum Oor',
        cost: 71900000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51614/Ferrum-Oor-1-450x450-c.jpeg',
        name: 'HiFiMan Serenade ',
        cost: 59900000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51474/1-3-450x450-c.jpg',
        name: 'HiFiMan Serenade',
        cost: 29990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51474/1-3-450x450-c.jpg',
        name: 'iFi xDSD Gryphon Pro Pack',
        cost: 29990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51116/1-5-450x450-c.png',
        name: 'iFi Pro iDSD Studio',
        cost: 17500000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51110/1-4-450x450-c.png',
        name: 'iFi Zen One Studio',
        cost: 7000000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51102/1-3-450x450-c.png',
        name: 'iFi Zen Can Studio',
        cost: 8990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51099/Untitled-design-450x450-c.png',
        name: '',
        cost: 6490000,
      },
    ],
  };

  DAP = {
    header: 'DAP',
    type: Constant.TYPE_LIST.PRODUCT,
    isFirst: true,
    data: [
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/48013/NW-A300_Primary_image_1200x1200-450x450-c.png',
        name: 'FiiO M11S',
        cost: 8990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/44874/88744845-DDB4-4622-85EF-B66582C41E92-450x450-c.jpeg',
        name: 'Sony WM1ZM2',
        cost: 12990000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/40452/EAF15F16-D72C-44F4-AD1B-93F4E9D2070F-450x450-c.jpeg',
        name: 'FiiO M17 ',
        cost: 74090000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/39683/5039898-450x450-c.png',
        name: 'FiiO M17',
        cost: 48000000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/39683/5039898-450x450-c.png',
        name: 'FiiO M11 Plus',
        cost: 48000000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/40283/may_nghe_nhac_fiio_m11_plus_3kshop-450x450-c.png',
        name: 'Sony DMP-Z1',
        cost: 18000000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/18344/sony-dmp-z1-3kshop-2-450x450-c.jpg',
        name: '',
        cost: 163990000,
      },
    ],
  };

  speaker = {
    header: 'speaker',
    type: Constant.TYPE_LIST.PRODUCT,
    isFirst: true,
    data: [
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51858/genelec-g-three5-450x450-c.jpeg',
        name: 'Genelec F One',
        cost: 43384000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51846/genelec-f-one-1-450x450-c.jpeg',
        name: 'Genelec G Two',
        cost: 29348000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51830/genelec-g-two8-450x450-c.png',
        name: 'Genelec G One ',
        cost: 35090000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51820/genelec-g-one-4-450x450-c.jpeg',
        name: 'Genelec G One',
        cost: 22968000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51820/genelec-g-one-4-450x450-c.jpeg',
        name: 'Sony SRS-XE200',
        cost: 22968000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51283/2-450x450-c.jpg',
        name: 'Bang & Olufsen Beosound 2 Gen 3',
        cost: 2450000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/50319/loa-b-o-beosound-2-gen-3-mau-gold-tone-1-450x450-c.jpg',
        name: 'Devialet Mania Sandstorm',
        cost: 107090000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/50369/BT369-DevialetMania-Sandstorm-02_2-2-450x450-c.png',
        name: 'Bang & Olufsen Beosound A9 5th gen',
        cost: 27690000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/50353/beosound-a9-mk5-gold-1-450x450-c.png',
        name: '',
        cost: 117800000,
      },
    ],
  };

  homeStudio = {
    header: 'homeStudio',
    type: Constant.TYPE_LIST.PRODUCT,
    isFirst: true,
    data: [
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52416/neumann-tlm-49-1-450x450-c.jpeg',
        name: 'SHURE SM7DB',
        cost: 46900000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52340/3kshop-shure-sm7db-1-450x450-c.jpg',
        name: 'Blackmagic Studio Camera 4K Plus G2',
        cost: 18040000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52175/blackmagic-studio-camera-4k-plus-g2-1-450x450-c.jpeg',
        name: 'Blackmagic Videohub 80x80 12G ',
        cost: 43380000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52140/blackmagic-videohub-80x80-12g-1-450x450-c.jpeg',
        name: 'Blackmagic Videohub 80x80 12G',
        cost: 294380000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52140/blackmagic-videohub-80x80-12g-1-450x450-c.jpeg',
        name: 'Blackmagic Design Micro Studio Camera 4K G2',
        cost: 294380000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52049/1694703706_IMG_2083409-450x450-c.jpg',
        name: 'Blackmagic Cinema Camera 6K',
        cost: 29380000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52046/3kshop-blackmagic-cinema-camera-6k-4-450x450-c.jpg',
        name: 'Elgato Facecam Pro',
        cost: 76480000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/50685/3kshop-elgato-facecam-pro-1-450x450-c.png',
        name: 'Yamaha YH-G01',
        cost: 9790000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/50542/yamaha-yg-01-2-450x450-c.jpeg',
        name: '',
        cost: 4580000,
      },
    ],
  };

  analog = {
    header: 'analog / vinyl',
    type: Constant.TYPE_LIST.PRODUCT,
    isFirst: true,
    data: [
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/47910/A9D4A54F-736D-4D37-B4A9-011E56D710CE-450x450-c.png',
        name: 'Audio Technica AT-LP2022',
        cost: 15510000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/47023/3kshop-audio-technica-at-lp2022-1-450x450-c.png',
        name: 'TEAC TN-280BT',
        cost: 37220000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/45482/3kshop-teac-tn-280bt-4-450x450-c.jpeg',
        name: 'iFi ZEN Air Phono ',
        cost: 9900000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/44037/75_2107_ifiaudiozenairphonopreamplifier_2_904x_progressive-450x450-c.jpg',
        name: 'iFi ZEN Air Phono',
        cost: 2690000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/44037/75_2107_ifiaudiozenairphonopreamplifier_2_904x_progressive-450x450-c.jpg',
        name: 'TEAC TN-180BT-A3',
        cost: 2690000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/39752/3kshop-teac-tn-180bt-a3-1-450x450-c.jpg',
        name: 'Dynavector DRT XV-1t',
        cost: 4890000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/28595/3kshop_Dynavector-DV-DRT-XV–1t-450x450-c.jpg',
        name: 'Dynavector DRT XV-1s',
        cost: 5500000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/28591/3kshop_Dynavector-xvs-450x450-c.png',
        name: 'Dynavector DV DRT XV-1s Mono',
        cost: 220000000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/28588/3kshopDynavector-xvs_mono-450x450-c.png',
        name: '',
        cost: 132000000,
      },
    ],
  };

  accessory = {
    header: 'phụ kiện',
    type: Constant.TYPE_LIST.PRODUCT,
    data: [
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/52379/Screen-Shot-2023-10-04-at-17.06.00-450x450-c.png',
        name: 'Ferrum Cable microUSB',
        cost: 3900000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51630/ferrum-cable-microusb-1-450x450-c.jpeg',
        name: 'Ferrum Power Splitter',
        cost: 7500000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51618/ferrum-power-splitter-1-450x450-c.jpeg',
        name: 'Ferrum Power Link DC Power Cord',
        cost: 3000000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51627/ferrum-power-link-dc-power-cord-1-450x450-c.jpeg',
        name: 'Ferrum Hypsos Power Link 2.5',
        cost: 3000000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51625/ferrum-hypsos-power-link-2-5-450x450-c.jpeg',
        name: 'Ferrum Hypsos Power Link 2.1',
        cost: 3000000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51623/ferrum-hypsos-power-link-2-1-450x450-c.jpeg',
        name: 'Ferrum Hypsos',
        cost: 35900000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51584/ferrum-hypsos-2-450x450-c.jpeg',
        name: 'FiiO LX-4.4M',
        cost: 500000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51470/lx44-2-450x450-c.jpg',
        name: 'FiiO LC-78A',
        cost: 300000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51468/FiiO-LC-78A-MMCX-to-0-78MM-2-pin-Audio-adapter-only-for-FD11-FH11-450x450-c.jpg',
        name: 'FiiO LS-4.4A (2pin)',
        cost: 600000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51465/LS-4.4A-2pin-450x450-c.jpg',
        name: 'FiiO LS-TC1 (2pin)',
        cost: 400000,
      },
      {
        img: 'https://3kshop.vn/wp-content/uploads/fly-images/51466/LS-TC1-2pin-1-450x450-c.jpg',
        name: 'FiiO LS-TC1 (2pin)',
        cost: 400000,
      },
    ],
  };
  categories = [
    {
      id: 'headphone',
      name: 'headphone',
      type: Constant.TYPE_LIST.PRODUCT,
      featureProduct: true,
    },
    {
      id: 'dac',
      name: 'DAC/AMP',
      type: Constant.TYPE_LIST.PRODUCT,
      featureProduct: true,
    },
    {
      id: 'dap',
      name: 'DAP',
      type: Constant.TYPE_LIST.PRODUCT,
      featureProduct: true,
    },
    {
      id: 'speaker',
      name: 'speaker',
      type: Constant.TYPE_LIST.PRODUCT,
      featureProduct: true,
    },
    {
      id: 'homeStudio',
      name: 'Home Studio',
      type: Constant.TYPE_LIST.PRODUCT,
      featureProduct: true,
    },
    {
      id: 'analog',
      name: 'analog / vinyl',
      type: Constant.TYPE_LIST.PRODUCT,
      featureProduct: true,
    },
    {
      id: 'accessory',
      name: 'Phụ kiện',
      type: Constant.TYPE_LIST.PRODUCT,
      featureProduct: false,
    },
  ];

  categoriesOption = {
    type: Constant.TYPE_SORT_FILTER.FILTER_TYPE,
    categories: this.categories,
  };

  constructor(private _myElement: ElementRef, private _router: Router) {}

  ngOnInit() {}

  scroll(id: any) {
    const el = this._myElement.nativeElement.querySelector('#' + id);
    el?.scrollIntoView(false);
  }

  redirectTo(path: any) {
    this._router.navigateByUrl(RouterConfig.PRODUCT_CATEGORY + '/' + path);
  }
}
