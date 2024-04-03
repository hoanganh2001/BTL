import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { cartData } from './order.types';
import { map } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getErrorText, validateFormControls } from 'app/shared/constant';
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
  passwordDialogRef: MatDialogRef<PaymentComponent>;

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
            image: item.image,
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

  remove(id?: number) {
    this._orderService.removeFromCart(id);
    this.cartList = id ? this.cartList.filter((t) => t.id !== id) : [];
    this.getCartList();
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
      coupon: model.coupon || null,
      create_date: dayjs().toJSON(),
      proudct: this.cartList.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        discount: item.discount,
      })),
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      // id: id,
      total: this.totalPrice,
    };
    dialogConfig.width = '600px';
    dialogConfig.minHeight = '280px';

    this.passwordDialogRef = this._dialog.open(PaymentComponent, dialogConfig);
    this.passwordDialogRef.afterClosed().subscribe((id) => {
      // if (id) this.getuserList(this.userSearchBody);
    });
    // this._orderService.checkOut(body).subscribe({
    //   next: (res) => {
    //     this.isClicked = false;
    //     if (res?.isLogIn) {
    //     }
    //     if (res?.isSuccess) {
    //       this.remove();
    //       const dialogConfig = new MatDialogConfig();
    //       // dialogConfig.data = {
    //       //   id: id,
    //       // };
    //       dialogConfig.width = '600px';
    //       dialogConfig.minHeight = '280px';

    //       this.passwordDialogRef = this._dialog.open(
    //         PaymentComponent,
    //         dialogConfig,
    //       );
    //       this.passwordDialogRef.afterClosed().subscribe((id) => {
    //         // if (id) this.getuserList(this.userSearchBody);
    //       });
    //       this._router.navigateByUrl(RouterConfig.HISTORY);
    //     }
    //   },
    //   error(err) {
    //     this._notiService?.showError(err.error.message);
    //   },
    // });
  }
}
