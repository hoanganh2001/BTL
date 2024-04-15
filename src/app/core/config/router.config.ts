export default class RouterConfig {
  public static HOME = '/';

  public static PRODUCT_CATEGORY = this.HOME + 'products';
  public static PRODUCT_DETAIL = this.PRODUCT_CATEGORY + '/detail/';
  public static BRANDS = this.HOME + 'brands';
  public static NEWS = this.HOME + 'news';
  public static PROMOTION = this.HOME + 'promotion';
  public static CONTACT = this.HOME + 'contact';
  public static MY_PROFILE = this.HOME + 'my-profile';
  public static HISTORY = this.MY_PROFILE + '/order';
  public static ABOUT = this.HOME + 'about';

  public static POLICY_SECURIY = this.HOME + 'policy';
  public static POLICY_PRODUCT = this.HOME + 'policy';
  public static POLICY_TRANSFER = this.HOME + 'policy';
  public static POLICY_PAYMENT = this.HOME + 'policy';
  public static POLICY_INSTALLMENT = this.HOME + 'policy';

  public static ORDER = this.HOME + 'order';

  public static SIGN_IN = this.HOME + 'sign-in';

  // admin route
  public static ADMIN = '/admin';

  public static ADMIN_DASHBOARD = this.ADMIN + '/home';
  public static ADMIN_PRODUCT = this.ADMIN + '/product';
  public static ADMIN_ORDER = this.ADMIN + '/order';
  public static ADMIN_CATEGORY = this.ADMIN + '/category';
  public static ADMIN_NEWS = this.ADMIN + '/news';
  public static ADMIN_BRAND = this.ADMIN + '/brand';
  public static ADMIN_COUPON = this.ADMIN + '/coupon';
  public static ADMIN_USER = this.ADMIN + '/user';
  public static ADMIN_PROFILE = this.ADMIN + '/my-profile';
}
