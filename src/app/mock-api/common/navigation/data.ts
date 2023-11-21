import RouterConfig from 'app/core/config/router.config';
import { Navigation } from 'app/core/navigation/navigation.types';
import { Constant } from 'app/shared/constant';
const SUBMENU_TYPE = Constant.SUBMENU_TYPE;

export const headerNavigation: Navigation[] = [
  {
    id: 'header',
    title: 'Sản phẩm',
    link: RouterConfig.PRODUCT_CATEGORY,
    submenu: {
      type: SUBMENU_TYPE.CATEGORY,
      name: 'products',
      category: {
        data: [],
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
      name: 'brands',
      link: RouterConfig.BRANDS,
      list: [],
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
