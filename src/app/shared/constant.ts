import {
  FormGroup,
  FormArray,
  FormControl,
  ValidationErrors,
} from '@angular/forms';

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

  public static IMG_DIR = {
    SHOP: 'https://3kshop.vn/wp-content/uploads/fly-images/',
    GOOGLE_DRIVE: 'https://drive.google.com/uc?export=view&id=',
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

export const validateFormControls = (
  formGroup: FormGroup | FormArray,
  formValidate,
  name?: string,
) => {
  Object.keys(formGroup.controls).forEach((key) => {
    const control = formGroup.controls[key];
    if (control instanceof FormControl) {
      const controlErrors: ValidationErrors = control.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((error) => {
          formValidate.isValidated = false;
          formValidate.errors.push({
            key: Number.isNaN(+key) ? key : `${name}[${key}]`,
            error,
            hasErrors: controlErrors[error],
          });
        });
      }
    } else if (control instanceof FormGroup || control instanceof FormArray) {
      if (control instanceof FormArray) {
        validateFormControls(control, formValidate, `${key}`);
      } else {
        validateFormControls(control, formValidate);
      }
    }
  });
  return formValidate;
};

export const getErrorText = (error: {
  key: string;
  error: string;
  hasErrors: boolean;
}): string => {
  if (!error?.hasErrors) {
    return null;
  }
  if (error.error.includes('required')) return error.key + ' is required';
  if (error.error.includes('pattern') || error.error.includes('email'))
    return error.key + ' is wrong format';
};
