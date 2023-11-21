import { NgModule } from '@angular/core';
import { ClassicComponent } from './classic.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { SubMenuModule } from '../common/sub-menu/sub-menu.module';
import { UserModule } from '../common/user/user.module';
import { CartModule } from '../common/cart/cart.module';
import { SearchModule } from '../common/search/search.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    SubMenuModule,
    UserModule,
    CartModule,
    SearchModule,
  ],
  declarations: [ClassicComponent],
  exports: [ClassicComponent],
})
export class ClassicModule {}
