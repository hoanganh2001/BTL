import { Component, OnInit } from '@angular/core';
import { sideBarNewList } from 'src/app/shared/component/side-bar-new/side-bar-newt.type';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  constructor() {}

  newList: sideBarNewList[] = [
    {
      id: 1,
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/52670/3kshop-devialet-gemini-2-gemini_II-tai-nghe-true-wireless_1-650x402-c.jpg',
      name: 'Trên tay tai nghe true wireless Devialet Gemini II',
      author: '',
      createDate: '',
      view: 0,
    },
    {
      id: 2,
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/52539/3kshop-ferrum-wandla-hypsosDSC-7459-650x402-c.jpg',
      name: 'Ferrum Wandla – DAC và Preamplifier tuyệt vời cho người chơi loa active',
      author: '',
      createDate: '',
      view: 0,
    },
    {
      id: 3,
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/52524/3kshop-fiio-fx15-tai-nghe-iem-in-ear_13-650x402-c.jpg',
      name: 'Trên tay tai nghe FiiO FX15 : thiết kế âm thanh tribrid, giá ~20tr',
      author: '',
      createDate: '',
      view: 0,
    },
    {
      id: 4,
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/52520/3kshop-ifi-hip-dac-3_3-scaled-650x402-c.jpg',
      name: 'iFi Hip Dac 3: màu mới, iFi Hip Dac 3: màu mới iFi Hip Dac 3: màu mới iFi Hip Dac 3: màu mới dùng USB-C, nâng cấp mạch tạo xung, có IEMatch, giá $199',
      author: '',
      createDate: '',
      view: 0,
    },
    {
      id: 5,
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/52487/3kshop-shure-sm7db-audio-650x402-c.jpg',
      name: 'Shure ra mắt SM7DB: vocal microphone cho nhu cầu thu âm ca hát, làm podcast, có tích hợp preamp',
      author: '',
      createDate: '',
      view: 0,
    },
  ];

  categories = [
    {
      id: 'review',
      name: 'Đánh giá sản phẩm',
      count: 106,
    },
    {
      id: 'knowledge',
      name: 'Kiến thức âm thanh',
      count: 124,
    },
    {
      id: 'new',
      name: 'Tin tức',
      count: 27,
    },
    {
      id: 'video',
      name: 'Videos',
      count: 1256,
    },
    {
      id: 'event',
      name: 'Sự kiện',
      count: 3,
    },
  ];

  ngOnInit() {}
}
