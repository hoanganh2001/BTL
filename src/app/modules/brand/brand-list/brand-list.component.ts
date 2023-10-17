import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
})
export class BrandListComponent implements OnInit {
  brandList = {
    title: 'brand list',
    data: [
      {
        id: 0,
        name: 'Abyss',
        img: 'https://3kshop.vn/wp-content/uploads/2022/10/abyss-logo-01.png',
      },
      {
        id: 1,
        name: 'Acoustic Energy',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/acoustic-energy-logo-3kshop.svg',
      },
      {
        id: 2,
        name: 'AKG',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/akg-logo-3kshop.svg',
      },
      {
        id: 3,
        name: 'ALO Audio',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-alo-audio-logo.jpg',
      },
      {
        id: 4,
        name: 'Analysis Plus',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/analysis-plus-logo-3kshop.svg',
      },
      {
        id: 5,
        name: 'Apple',
        img: 'https://3kshop.vn/wp-content/uploads/2020/06/Apple_logo.jpg',
      },
      {
        id: 6,
        name: 'Astell&Kern',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-astell-and-kern-logo.svg',
      },
      {
        id: 7,
        name: 'Audeze',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-audeze-logo.svg',
      },
      {
        id: 8,
        name: 'Audio GD',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-logo-audiogd.svg',
      },
      {
        id: 9,
        name: 'Audio Pro',
        img: 'https://3kshop.vn/wp-content/uploads/2021/12/Audio_Pro-01.svg',
      },
      {
        id: 10,
        name: 'Audio Technica',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/audio-technica-logo-3kshop.svg',
      },
      {
        id: 11,
        name: 'Audioengine',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/audioengine-logo-3kshop.svg',
      },
      {
        id: 12,
        name: 'Audiolab',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/audiolab-logo-3kshop.svg',
      },
      {
        id: 13,
        name: 'Aune',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-aune-logo.svg',
      },
      {
        id: 14,
        name: 'Aurender',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-aurender-logo.svg',
      },
      {
        id: 15,
        name: 'Bang & Olufsen',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-bang-olufsen-logo.svg',
      },
      {
        id: 16,
        name: 'Beats',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-beats-logo.svg',
      },
      {
        id: 17,
        name: 'Belkin',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/belkin-logo-3kshop.svg',
      },
      {
        id: 18,
        name: 'Beyerdynamic',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/beyerdynamic-logo-3kshop.svg',
      },
      {
        id: 19,
        name: 'Blackmagic',
        img: '',
      },
      {
        id: 20,
        name: 'Bose',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-bose-logo.svg',
      },
      {
        id: 21,
        name: 'Cabasse',
        img: 'https://3kshop.vn/wp-content/uploads/2021/05/logo-Cabasse_white_M-01.svg',
      },
      {
        id: 22,
        name: 'Campfire Audio',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/campfire-audio-logo-3kshop.svg',
      },
      {
        id: 23,
        name: 'Chord',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/chord-electronics-logo-3kshop.svg',
      },
      {
        id: 24,
        name: 'Clearaudio',
        img: 'https://3kshop.vn/wp-content/uploads/2019/11/clearaudio-logo-3kshop.svg',
      },
      {
        id: 25,
        name: 'Dali',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-dali-logo.svg',
      },
      {
        id: 26,
        name: 'Dan Clark Audio',
        img: 'https://3kshop.vn/wp-content/uploads/2019/11/dan-clark-auido.svg',
      },
      {
        id: 27,
        name: 'dCS',
        img: '',
      },
      {
        id: 28,
        name: 'ddhifi',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/ddhifi-logo-3kshop.svg',
      },
      {
        id: 29,
        name: 'Denon',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-denon-logo.svg',
      },
      {
        id: 30,
        name: 'DEVIALET',
        img: 'https://3kshop.vn/wp-content/uploads/2021/06/devialet-logo-01.svg',
      },
      {
        id: 31,
        name: 'DUNU',
        img: 'https://3kshop.vn/wp-content/uploads/2020/03/dunu.jpg',
      },
      {
        id: 32,
        name: 'Dynaudio',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/logo-dynaudio.svg',
      },
      {
        id: 33,
        name: 'Dynavector',
        img: 'https://3kshop.vn/wp-content/uploads/2020/10/3kshop_dynavector-logo.jpg',
      },
      {
        id: 34,
        name: 'Edifier',
        img: 'https://3kshop.vn/wp-content/uploads/2021/10/edifier-logo1.svg',
      },
      {
        id: 35,
        name: 'Eidolic',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/eidolic-logo-3kshop.svg',
      },
      {
        id: 36,
        name: 'Elecom',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-elecom-Logo.svg',
      },
      {
        id: 37,
        name: 'Elgato',
        img: '',
      },
      {
        id: 38,
        name: 'Empire Ears',
        img: 'https://3kshop.vn/wp-content/uploads/2020/02/empire-ears-logo-3kshop.svg',
      },
      {
        id: 39,
        name: 'Fender',
        img: 'https://3kshop.vn/wp-content/uploads/2021/12/Fender-01.svg',
      },
      {
        id: 40,
        name: 'Ferrum',
        img: '',
      },
      {
        id: 41,
        name: 'FiiO',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-fiio-logo.svg',
      },
      {
        id: 42,
        name: 'Focal',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-focal-logo.svg',
      },
      {
        id: 43,
        name: 'Fostex',
        img: '',
      },
      {
        id: 44,
        name: 'Furutech',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-furutech-logo.svg',
      },
      {
        id: 45,
        name: 'Genelec',
        img: '',
      },
      {
        id: 46,
        name: 'Godox',
        img: '',
      },
      {
        id: 47,
        name: 'Hana',
        img: 'https://3kshop.vn/wp-content/uploads/2019/11/hana-cartridge-logo-3kshop-1.svg',
      },
      {
        id: 48,
        name: 'Hãng khác',
        img: 'https://3kshop.vn/wp-content/uploads/1970/01/logo-speaker-hangsanxuatkhac.jpg',
      },
      {
        id: 49,
        name: 'Harman Kardon',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/harman-kardon-logo-3kshop.svg',
      },
      {
        id: 50,
        name: 'Headamp',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/headamp-logo-3kshop.svg',
      },
      {
        id: 51,
        name: 'HifiMan',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-hifiman-logo.svg',
      },
      {
        id: 52,
        name: 'iFi',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/ifi-logo-3kshop.svg',
      },
      {
        id: 53,
        name: 'Jabra',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-jabra-logo.svg',
      },
      {
        id: 54,
        name: 'Jade Audio',
        img: 'https://3kshop.vn/wp-content/uploads/2019/09/jade-audio-logo.jpg',
      },
      {
        id: 55,
        name: 'Jamo',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-jamo-audio-logo.svg',
      },
      {
        id: 56,
        name: 'JBL',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/jbl-logo-3kshop.svg',
      },
      {
        id: 57,
        name: 'JLAB Audio',
        img: 'https://3kshop.vn/wp-content/uploads/2021/01/jlab-logo-1-01.svg',
      },
      {
        id: 58,
        name: 'Klipsch',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/klipsch-logo-3kshop.svg',
      },
      {
        id: 59,
        name: 'Koss',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-koss-logo.svg',
      },
      {
        id: 60,
        name: 'Linum',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-linum-logo.svg',
      },
      {
        id: 61,
        name: 'Marshall',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-marshall-logo.svg',
      },
      {
        id: 62,
        name: 'Master and Dynamic',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-master-dynamic-logo.svg',
      },
      {
        id: 63,
        name: 'Mighty',
        img: 'https://3kshop.vn/wp-content/uploads/2020/05/Mighty-01.svg',
      },
      {
        id: 64,
        name: 'Moon by Simaudio',
        img: 'https://3kshop.vn/wp-content/uploads/2020/10/moonbysim10282020.jpg',
      },
      {
        id: 65,
        name: 'Music Hall',
        img: 'https://3kshop.vn/wp-content/uploads/2020/04/music-hall-logo.svg',
      },
      {
        id: 66,
        name: 'Nanoleaf',
        img: '',
      },
      {
        id: 67,
        name: 'Neumann',
        img: '',
      },
      {
        id: 68,
        name: 'Neutrik',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/neutrik-logo-3kshop.svg',
      },
      {
        id: 69,
        name: 'Noble',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-noble-audio-logo.svg',
      },
      {
        id: 70,
        name: 'Nobunaga Labs',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/nobunaga-labs-logo.svg',
      },
      {
        id: 71,
        name: 'Nordost',
        img: 'https://3kshop.vn/wp-content/uploads/2020/05/Nordost-Logo-Black-01.svg',
      },
      {
        id: 72,
        name: 'Norne',
        img: 'https://3kshop.vn/wp-content/uploads/1970/01/3kshop-norne-audio-logo.jpg',
      },
      {
        id: 73,
        name: 'NuPrime',
        img: '',
      },
      {
        id: 74,
        name: 'Oladance',
        img: '',
      },
      {
        id: 75,
        name: 'Ortofon',
        img: 'https://3kshop.vn/wp-content/uploads/2019/11/ortofon-logo-3kshop.svg',
      },
      {
        id: 76,
        name: 'Oyaide',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-oyaide-logo.svg',
      },
      {
        id: 77,
        name: 'Padmate',
        img: 'https://3kshop.vn/wp-content/uploads/2020/03/padmatelogo.jpg',
      },
      {
        id: 78,
        name: 'Paradigm',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/logo-paradigm.svg',
      },
      {
        id: 79,
        name: 'Partron',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/partron-logo-3kshop.svg',
      },
      {
        id: 80,
        name: 'Pro-Ject Audio',
        img: 'https://3kshop.vn/wp-content/uploads/2019/11/project-audio-3kshop-logo.svg',
      },
      {
        id: 81,
        name: 'Radius',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-radius-logo.svg',
      },
      {
        id: 82,
        name: 'Radsone',
        img: 'https://3kshop.vn/wp-content/uploads/2020/03/radson-01.png',
      },
      {
        id: 83,
        name: 'RHA',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-rha-logo.svg',
      },
      {
        id: 84,
        name: 'Riva Audio',
        img: 'https://3kshop.vn/wp-content/uploads/2021/06/3k-shop-riva-audio-logo.svg',
      },
      {
        id: 85,
        name: 'Rivacase',
        img: '',
      },
      {
        id: 86,
        name: 'Roon',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/logo-roon-labs.svg',
      },
      {
        id: 87,
        name: 'Schiit Audio',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-schiit-logo.svg',
      },
      {
        id: 88,
        name: 'Sennheiser',
        img: 'https://3kshop.vn/wp-content/uploads/2019/10/sennheiser-logo-3kshop.svg',
      },
      {
        id: 89,
        name: 'Shure',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-shure-logo.svg',
      },
      {
        id: 90,
        name: 'Silicon Z',
        img: '',
      },
      {
        id: 91,
        name: 'Skullcandy',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-SkullCandy-Logo.svg',
      },
      {
        id: 92,
        name: 'Sommer Cable',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/logo-sommer-cable.png',
      },
      {
        id: 93,
        name: 'Sony',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-sony-logo.svg',
      },
      {
        id: 94,
        name: 'SpinFit',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-spinfit-logo.jpg',
      },
      {
        id: 95,
        name: 'Stax',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-stax-logo.svg',
      },
      {
        id: 96,
        name: 'Steinberg',
        img: '',
      },
      {
        id: 97,
        name: 'sudio',
        img: '',
      },
      {
        id: 98,
        name: 'Sumiko',
        img: 'https://3kshop.vn/wp-content/uploads/2019/11/sumiko-logo-3kshop.svg',
      },
      {
        id: 99,
        name: 'Synergistic Research',
        img: '',
      },
      {
        id: 100,
        name: 'T&A Audio',
        img: 'https://3kshop.vn/wp-content/uploads/2021/06/TA-audio-logo1-01.svg',
      },
      {
        id: 101,
        name: 'Teac',
        img: 'https://3kshop.vn/wp-content/uploads/2020/04/teaclogo.jpg',
      },
      {
        id: 102,
        name: 'Topping',
        img: 'https://3kshop.vn/wp-content/uploads/2021/06/topping-audio-3kshop-logo-01.svg',
      },
      {
        id: 103,
        name: 'Under Armour',
        img: 'https://3kshop.vn/wp-content/uploads/2021/06/3kshop-Under_armour_logo-01.svg',
      },
      {
        id: 104,
        name: 'Viablue',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-viablue-logo.png',
      },
      {
        id: 105,
        name: 'Vifa',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-vifa-logo.jpg',
      },
      {
        id: 106,
        name: 'VPI',
        img: 'https://3kshop.vn/wp-content/uploads/2020/05/vpi-logo_1.svg',
      },
      {
        id: 107,
        name: 'Westone',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-westone-logo.svg',
      },
      {
        id: 108,
        name: 'Wharfedale',
        img: 'https://3kshop.vn/wp-content/uploads/1970/01/wharfedale-logo.jpg',
      },
      {
        id: 109,
        name: 'Yamaha',
        img: '',
      },
      {
        id: 110,
        name: 'Yuin',
        img: 'https://3kshop.vn/wp-content/uploads/2018/11/3kshop-yuin-logo.svg',
      },
    ],
  };

  limit: number | null = 20;
  constructor() {}

  ngOnInit() {}

  showMore() {
    this.limit =
      this.limit && this.limit < this.brandList.data.length
        ? this.limit * 2
        : null;
  }
}
