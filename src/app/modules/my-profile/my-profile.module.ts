import { NgModule } from '@angular/core';
import { MyProfileComponent } from './my-profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { MyProfileRoutes } from './my-profile.routing';
import { AccountModule } from './account/account.module';
import { LovedModule } from './loved/loved.module';
import { OrderModule } from './order/order.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(MyProfileRoutes),
    AccountModule,
    LovedModule,
    OrderModule,
  ],
  declarations: [MyProfileComponent],
})
export class MyProfileModule {}
