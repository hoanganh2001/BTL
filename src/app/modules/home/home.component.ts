import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

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

  product = [
    {
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/37385/230d75d2a50360eebf9a76a040bffb9f-450x450-c.jpeg',
      name: 'Klipsch The One II',
      cost: 4800000,
      isFirst: true,
    },
    {
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/37385/230d75d2a50360eebf9a76a040bffb9f-450x450-c.jpeg',
      name: 'Noble Stage 3',
      cost: 6400000,
    },
    {
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/50621/noble-stage-3-1-450x450-c.jpeg',
      name: 'Yamaha YH-G01',
      cost: 4990000,
    },
    {
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/37385/230d75d2a50360eebf9a76a040bffb9f-450x450-c.jpeg',
      name: 'Elgato Cam Link 4K ',
      cost: 4580000,
    },
    {
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/50542/yamaha-yg-01-2-450x450-c.jpeg',
      name: 'Elgato Cam Link 4K',
      cost: 2895000,
    },
  ];
  ngOnInit() {}
}
