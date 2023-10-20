import RouterConfig from 'src/app/core/config/router.config';
import { Navigation } from 'src/app/core/navigation/navigation.types';
import { Constant } from 'src/app/shared/constant';
const SUBMENU_TYPE = Constant.SUBMENU_TYPE;

export const headerNavigation: Navigation[] = [
  {
    id: 'header',
    title: 'Sản phẩm',
    link: RouterConfig.PRODUCT_CATEGORY,
    submenu: {
      type: SUBMENU_TYPE.CATEGORY,
      category: {
        data: [
          {
            id: 'headphone',
            title: 'headphone',
            link: '',
            icon: 'bi-headphones',
            active: true,
            data: [
              {
                id: 'type',
                title: 'headphone type',
                options: [
                  {
                    id: 'full',
                    name: 'Full size',
                  },
                  {
                    id: 'on',
                    name: 'on ear',
                  },
                  {
                    id: 'earbud',
                    name: 'earbud',
                  },
                  {
                    id: 'in',
                    name: 'in ear',
                  },
                  {
                    id: 'wireless',
                    name: 'wireless',
                  },
                  {
                    id: 'true_wireless',
                    name: 'true wireless',
                  },
                  {
                    id: 'custome',
                    name: 'custome in ear',
                  },
                ],
              },
              {
                id: 'feature',
                title: 'headphone feature',
                options: [
                  {
                    id: 1,
                    name: 'Chống ồn',
                  },
                  {
                    id: 2,
                    name: 'Không dây',
                  },
                  {
                    id: 3,
                    name: 'Có micro',
                  },
                  {
                    id: 4,
                    name: 'Có tăng giảm âm lượng',
                  },
                  {
                    id: 5,
                    name: 'Tai nghe thể thao',
                  },
                  {
                    id: 6,
                    name: 'Tai nghe DJ',
                  },
                  {
                    id: 7,
                    name: 'Tai nghe phòng thu',
                  },
                  {
                    id: 8,
                    name: 'Tai nghe Gaming',
                  },
                ],
              },
            ],
          },
          {
            id: 'amp',
            title: 'DAC/AMP',
            link: '',
            svg: '/assets/images/icon/icon-dac.svg',
            active: false,
            data: [
              {
                id: 'type',
                title: 'DAC/Amp type',
                options: [
                  {
                    id: 'item',
                    name: 'Desktop DAC',
                  },
                  {
                    id: 'item',
                    name: 'Portable DAC/Amp',
                  },
                  {
                    id: 'item',
                    name: 'Portable Amplifier',
                  },
                  {
                    id: 'item',
                    name: 'Headphone Amplifier',
                  },
                  {
                    id: 'item',
                    name: 'Speakers Amplifier',
                  },
                  {
                    id: 'item',
                    name: 'Transport',
                  },
                  {
                    id: 'item',
                    name: 'Preamp',
                  },
                  {
                    id: 'item',
                    name: 'Bluetooth Receiver',
                  },
                  {
                    id: 'item',
                    name: 'Bluetooth Transmitter',
                  },
                ],
              },
              {
                id: 'headfeature',
                title: 'DAC/AMP feature',
                options: [
                  {
                    id: 'item',
                    name: 'Streaming DAC',
                  },
                  {
                    id: 'item',
                    name: 'DSD Suport',
                  },
                  {
                    id: 'item',
                    name: 'R2R ladder DAC',
                  },
                  {
                    id: 'item',
                    name: 'Pre Out',
                  },
                  {
                    id: 'item',
                    name: 'Bluetooth',
                  },
                  {
                    id: 'item',
                    name: 'Wifi',
                  },
                  {
                    id: 'item',
                    name: 'Tube amp',
                  },
                  {
                    id: 'item',
                    name: 'Solid amp',
                  },
                  {
                    id: 'item',
                    name: 'Tích hợp Phono',
                  },
                  {
                    id: 'item',
                    name: 'USB power supply',
                  },
                  {
                    id: 'item',
                    name: 'Power Filter',
                  },
                  {
                    id: 'item',
                    name: 'Digital Filter',
                  },
                ],
              },
            ],
          },
          {
            id: 'dap',
            title: 'DAP',
            link: '',
            icon: 'bi-music-player',
            active: false,
            data: [
              {
                id: 'type',
                title: 'DAP type',
                options: [
                  {
                    id: 'item',
                    name: 'Loseless Player',
                  },
                  {
                    id: 'item',
                    name: '24BIT Player',
                  },
                  {
                    id: 'item',
                    name: 'DSD Player',
                  },
                ],
              },
              {
                id: 'feature',
                title: 'DAP Features',
                options: [
                  {
                    id: 'item',
                    name: 'Touchscreen',
                  },
                  {
                    id: 'item',
                    name: 'Native DSD',
                  },
                  {
                    id: 'item',
                    name: 'Bluetooth',
                  },
                  {
                    id: 'item',
                    name: 'Wifi',
                  },
                  {
                    id: 'item',
                    name: 'OTG Support',
                  },
                  {
                    id: 'item',
                    name: 'USB DAC',
                  },
                  {
                    id: 'item',
                    name: 'Line out',
                  },
                  {
                    id: 'item',
                    name: 'Balance out',
                  },
                  {
                    id: 'item',
                    name: 'Digital out',
                  },
                ],
              },
            ],
          },
          {
            id: 'speaker',
            title: 'speaker',
            link: '',
            icon: 'bi-speaker',
            active: false,
            data: [
              {
                id: 'type',
                title: 'speaker type',
                options: [
                  {
                    id: 'item',
                    name: 'Conference Speaker',
                  },
                  {
                    id: 'item',
                    name: 'Portable Speaker',
                  },
                  {
                    id: 'item',
                    name: 'Smart Home Speaker',
                  },
                  {
                    id: 'item',
                    name: 'Computer Speaker',
                  },
                  {
                    id: 'item',
                    name: 'Bookshelf Speaker',
                  },
                  {
                    id: 'item',
                    name: 'Home Theater Speaker',
                  },
                  {
                    id: 'item',
                    name: 'Soundbars',
                  },
                  {
                    id: 'item',
                    name: 'Subwoofer',
                  },
                  {
                    id: 'item',
                    name: 'Floor Standing Speaker',
                  },
                  {
                    id: 'item',
                    name: 'Active Speaker',
                  },
                  {
                    id: 'item',
                    name: 'Wireless Speaker',
                  },
                ],
              },
              {
                id: 'feature',
                title: 'speaker features',
                options: [
                  {
                    id: 'item',
                    name: 'Bluetooth',
                  },
                  {
                    id: 'item',
                    name: 'Airplay',
                  },
                  {
                    id: 'item',
                    name: 'Wifi',
                  },
                  {
                    id: 'item',
                    name: 'Multi-room',
                  },
                  {
                    id: 'item',
                    name: 'Tích hợp DAC',
                  },
                  {
                    id: 'item',
                    name: 'Tích hợp Amply',
                  },
                  {
                    id: 'item',
                    name: 'Tích hợp Phono',
                  },
                  {
                    id: 'item',
                    name: 'Trợ lý ảo',
                  },
                ],
              },
            ],
          },
          {
            id: 'analog',
            title: 'analog / vinyl',
            link: '',
            icon: 'bi-vinyl-fill',
            active: false,
            data: [
              {
                id: 'type',
                title: 'Turntable',
                options: [
                  {
                    id: 'item',
                    name: 'Digital Output',
                  },
                  {
                    id: 'item',
                    name: 'Bluetooth',
                  },
                  {
                    id: 'item',
                    name: 'Tích hợp Phono',
                  },
                  {
                    id: 'item',
                    name: 'Tích hợp Tonearm',
                  },
                  {
                    id: 'item',
                    name: 'Tích hợp Cartridge',
                  },
                ],
              },
              {
                id: 'feature',
                title: 'Speaker Features',
                options: [
                  {
                    id: 'item',
                    name: 'MM',
                  },
                  {
                    id: 'item',
                    name: 'MC',
                  },
                ],
              },
              {
                id: 'type',
                title: 'Cartridge',
                options: [
                  {
                    id: 'item',
                    name: 'Phono stage',
                  },
                ],
              },
            ],
          },
          {
            id: 'accessory',
            title: 'phụ kiện',
            link: '',
            icon: 'bi-mic',
            active: false,
            data: [
              {
                id: 'type',
                title: 'Headphones cable',
                options: [
                  {
                    id: 'item',
                    name: '4.4mm',
                  },
                  {
                    id: 'item',
                    name: 'Wireless',
                  },
                  {
                    id: 'item',
                    name: '2-pin connector',
                  },
                  {
                    id: 'item',
                    name: '2.5mm connector',
                  },
                  {
                    id: 'item',
                    name: '3.5mm connector',
                  },
                  {
                    id: 'item',
                    name: 'MMCX connector',
                  },
                  {
                    id: 'item',
                    name: 'Bluetooth cable',
                  },
                  {
                    id: 'item',
                    name: 'Apple Lightning cable',
                  },
                ],
              },
              {
                id: 'type',
                title: 'Dây',
                options: [
                  {
                    id: 'item',
                    name: 'Dây IC',
                  },
                  {
                    id: 'item',
                    name: 'Dây Loa',
                  },
                  {
                    id: 'item',
                    name: 'Dây Coaxial',
                  },
                  {
                    id: 'item',
                    name: 'Dây optical',
                  },
                  {
                    id: 'item',
                    name: 'Dây USB',
                  },
                ],
              },
              {
                id: 'type',
                title: 'Phụ kiện khác',
                options: [
                  {
                    id: 'item',
                    name: 'Microphone',
                  },
                  {
                    id: 'item',
                    name: 'Ear tips',
                  },
                  {
                    id: 'item',
                    name: 'Ear pads',
                  },
                  {
                    id: 'item',
                    name: 'Hộp đựng',
                  },
                  {
                    id: 'item',
                    name: 'Leather case',
                  },
                  {
                    id: 'item',
                    name: 'Lọc nhiễu',
                  },
                  {
                    id: 'item',
                    name: 'Adapter nguồn',
                  },
                ],
              },
            ],
          },
        ],
        logo: 'https://3kshop.vn/wp-content/uploads/2020/10/Sennheiser-CX-400BT-490x608-1.jpg',
        alt: 'Banner',
      },
    },
  },
  {
    id: 'header',
    title: 'Thương hiệu',
    link: RouterConfig.BRANDS,
    submenu: {
      type: SUBMENU_TYPE.LIST,
      link: RouterConfig.BRANDS,
      list: [
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
      ],
    },
  },
  {
    id: 'header',
    title: 'Tin tức',
    link: RouterConfig.NEWS,
  },
  {
    id: 'header',
    title: 'Khuyến mãi',
    link: RouterConfig.PROMOTION,
  },
  {
    id: 'header',
    title: 'Liên hệ',
    link: RouterConfig.CONTACT,
  },
];
export const footerNavigation: any[] = [
  {
    id: 'footer',
    title: 'Giới thiệu',
    column: 1,
    data: [
      {
        title: 'Giới thiệu về 3K Shop',
        link: RouterConfig.ABOUT,
      },
      {
        title: 'Thương hiệu',
        link: RouterConfig.BRANDS,
      },
      {
        title: 'Sản Phẩm',
        link: RouterConfig.PRODUCT_CATEGORY,
      },
    ],
  },
  {
    id: 'footer',
    title: 'Các chính sách',
    column: 2,
    data: [
      {
        title: 'Bảo mật thông tin cá nhân',
        link: RouterConfig.POLICY_SECURIY,
      },
      {
        title: 'Cam kết hàng hóa',
        link: RouterConfig.POLICY_PRODUCT,
      },
      {
        title: 'Chính sách vận chuyển',
        link: RouterConfig.POLICY_TRANSFER,
      },
      {
        title: 'Hình thức thanh toán',
        link: RouterConfig.POLICY_PAYMENT,
      },
      {
        title: 'Hướng dẫn mua trả góp',
        link: RouterConfig.POLICY_INSTALLMENT,
      },
    ],
  },
  {
    id: 'footer',
    title: 'Hồ Chí Minh',
    column: 3,
    data: [
      {
        address: '14 Nguyễn Văn Giai, P. Đa Kao, Q.1',
        contact: '(028) 38 202 909 – 0914 345 357',
      },
      {
        address: '6B Đinh Bộ Lĩnh, P. 24, Q.Bình Thạnh',
        contact: '(028)38 202 909-0914345357',
      },
    ],
  },
];
