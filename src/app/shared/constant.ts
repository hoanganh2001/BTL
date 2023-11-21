export class Constant {
  public static TYPE_LIST = {
    PRODUCT: 'product',
    PRODUCT_ONLY: 'product_only',
    PRODUCT_SLIDE: 'product_slide',
    NEW: 'new',
    VIDEO_NEW: 'video_new',
  };

  public static TYPE_SORT_FILTER = {
    SORT: 'sort',
    FILTER_FEATURE: 'filter_feature',
    FILTER_TYPE: 'filter_type',
    FILTER_BRAND: 'filter_brand',
    FILTER_TYPE_BUTTON: 'filter_type_btn',
    FILTER_CATEGORY: 'filter_category',
  };

  public static FILTER_TYPE = {
    MULTI_CHECKBOX: 'multi_checkbox',
    RANGE_INPUT: 'range_input',
  };

  public static SUBMENU_TYPE = {
    LIST: 'list',
    CATEGORY: 'category',
  };
}
export const ICON = {
  headphone: 'bi-headphones',
  dac: '/assets/images/icon/icon-dac.svg',
  dap: 'bi-music-player',
  speaker: 'bi-speaker',
  analog: 'bi-vinyl-fill',
  accesssory: 'bi-mic',
};

export const getIcon = (name: string): string => {
  if (name.includes('/')) {
    const nameArr = name.split('/');
    return ICON[nameArr[0]] || ICON[nameArr[1]];
  }
  if (name.includes('phụ kiện')) {
    return ICON['accesssory'];
  }
  return ICON[name];
};
