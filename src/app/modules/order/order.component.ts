import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { cartData, coupon } from './order.types';
import { map } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  Constant,
  getErrorText,
  getImgUrl,
  validateFormControls,
} from 'app/shared/constant';
import { Router } from '@angular/router';
import RouterConfig from 'app/core/config/router.config';
import * as dayjs from 'dayjs';
import { NotificationService } from 'app/core/service/notification';
import {
  MatDialogRef,
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';
import { PaymentComponent } from './payment/payment.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  couponControl = new FormControl('', []);

  paymentDialogRef: MatDialogRef<PaymentComponent>;

  couponData?: coupon = {};
  allComplete: boolean = false;
  orderForm?: FormGroup;
  isClicked: boolean = false;
  payments = [
    {
      id: 'bank',
      name: 'Chuyển khoản ngân hàng',
      hint: `Vui lòng ghi chú tên sản phẩm trong phần nội dung chuyển khoản.
    Đơn hàng sẽ đươc đóng gói và giao sau khi 3K Shop nhận được
    khoản thanh toán.`,
      value: false,
    },
    {
      id: 'COD',
      name: 'Trả tiền mặt khi nhận hàng',
      hint: `Trả tiền mặt khi giao hàng (Chỉ áp dụng cho khu vực Hà Nội và Hồ Chí Minh)`,
      value: false,
    },
    {
      id: 'momo',
      name: 'Thanh toán bằng Momo',
      hint: `Bạn có thể thanh toán bằng ứng dụng momo`,
      value: false,
    },
  ];
  cartList: cartData[];
  totalPrice: number = 0;
  amount: number = 0;

  constructor(
    private _orderService: OrderService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    public _dialog: MatDialog,
    private _notiService: NotificationService,
  ) {
    this.orderForm = this._formBuilder.group({
      name: ['hahaha', [Validators.required]],
      address: ['Ha Noi', [Validators.required]],
      phone: [
        '0123456789',
        [Validators.required, Validators.pattern(/\d{10}/)],
      ],
      email: ['abceok8@gmail.com', [Validators.required, Validators.email]],
      note: ['', []],
      payment: ['', [Validators.required]],
    });
  }
  ngOnInit() {
    this.getCartList();
    this.orderForm.get('payment').valueChanges.subscribe((value) => {
      this.check(value);
    });
  }
  check(id) {
    this.payments = this.payments.map((t) => {
      t.value = t.id === id;
      return t;
    });
  }

  getCartList() {
    this.cartList = this._orderService.getCartItems();
    if (!this.cartList || this.cartList.length === 0) {
      this._router.navigateByUrl(RouterConfig.HOME);
      return;
    }
    const body = { id: this.cartList.map((t) => t.id) };
    this._orderService
      .getItemsOnCart(body)
      .pipe(
        map((res) => {
          return res.data.map((item) => ({
            id: item.id,
            name: item.name,
            image: getImgUrl(item.thumbnail_url),
            price: item.price,
            discount: item.discount,
            remainQuantity: item.quantity,
          }));
        }),
      )
      .subscribe((res) => {
        this.cartList = res.map((item) => ({
          ...item,
          quantity: this.cartList.find((t) => t.id === item.id).quantity,
        }));
        this.getTotal(this.cartList);
      });
  }

  getCoupon() {
    const body = { name: this.couponControl.value };
    this._orderService.getCoupon(body).subscribe({
      next: (res) => {
        if (res) {
          const char = Constant.COUPON_TYPE[res.data.unit?.toUpperCase()];
          this.couponData.id = res.data.id;
          this.couponData.value = res.data.value;
          this.couponData.unit = res.data.unit;
          if (char) {
            this.couponData.label = '-' + res.data.value + char;
          }

          this.amount = this.totalPrice * (1 - res.data.value / 100);
        }
      },
      error: (err) => {
        this.couponData = {};
        this._notiService?.showError(err.error.message);
      },
    });
  }

  getDiscountPrice(cost: number, discount: number): number {
    return cost * (1 - discount / 100);
  }

  getTotal(list: cartData[]) {
    this.totalPrice = 0;
    list.forEach((item) => {
      const price = item.discount
        ? this.getDiscountPrice(item.price, item.discount)
        : item.price;

      this.totalPrice += price * item.quantity;
    });
    this.amount = this.totalPrice;
  }

  updateQuantity(quantity: number, id: number, remainQuantity: number) {
    if (quantity > remainQuantity) {
      quantity = remainQuantity;
    }
    if (quantity <= 0) {
      this.remove(id);
    } else {
      this._orderService.updateQuantity(id, quantity);
    }
    this.getCartList();
  }

  remove(id?: number, action?: string) {
    this._orderService.removeFromCart(id);
    this.cartList = id ? this.cartList.filter((t) => t.id !== id) : [];
    if (action !== 'checkout') this.getCartList();
  }

  checkOut() {
    if (this.isClicked) {
      return;
    }
    this.isClicked = true;

    let formValidate = {
      isValidated: true,
      errors: [],
    };

    this.orderForm.markAllAsTouched();

    const validateResult = validateFormControls(this.orderForm, formValidate);

    if (!validateResult.isValidated) {
      this._notiService.showError(getErrorText(validateResult.errors[0]));
      this.isClicked = false;
      return;
    }
    const model = this.orderForm.getRawValue();
    const body = {
      name: model.name,
      address: model.address,
      email: model.email,
      phone_number: model.phone,
      note: model.note || null,
      payment: model.payment,
      coupon: this.couponData.id || null,
      create_date: dayjs().toJSON(),
      amount: this.amount,
      proudct: this.cartList.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        discount: item.discount,
      })),
    };

    this._orderService.checkOut(body).subscribe({
      next: (res) => {
        this.isClicked = false;
        this._notiService.showSuccess(res.message);
        if (res?.isSuccess) {
          if (model.payment !== 'COD') {
            const dialogConfig = new MatDialogConfig();
            dialogConfig.data = {
              id: res.orderId,
              payment: model.payment,
              total: this.amount,
            };
            dialogConfig.width = '600px';
            dialogConfig.height = 'fit-content';
            dialogConfig.maxHeight = '800px';

            this.paymentDialogRef = this._dialog.open(
              PaymentComponent,
              dialogConfig,
            );
            this.paymentDialogRef.afterClosed().subscribe((id) => {
              this.remove(null, 'checkout');
              // if (res?.isLogIn) {
              //   this._router.navigateByUrl(RouterConfig.HISTORY);
              // } else {
              //   this._router.navigateByUrl(RouterConfig.HOME);
              // }
            });
          } else {
            this.remove(null, 'checkout');
            if (res?.isLogIn) {
              this._router.navigateByUrl(RouterConfig.HISTORY);
            } else {
              this._router.navigateByUrl(RouterConfig.HOME);
            }
          }
        }
      },
      error: (err) => {
        this.isClicked = false;
        this._notiService?.showError(err.error.message);
      },
    });
  }
}
