export default class RouterConfig {
  public static HOME = '/';

  public static PRODUCT_CATEGORY = this.HOME + 'products';
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
  public static ADMIN_CREATE_PRODUCT = this.ADMIN_PRODUCT + '/create';
  public static ADMIN_USER_PROFILE = this.ADMIN + '/my-profile';
}
