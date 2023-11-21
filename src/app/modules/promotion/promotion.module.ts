import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { PromotionRoutes } from './promotion.routing';
import { PromotionListModule } from './promotion-list/promotion-list.module';

@NgModule({
  imports: [
    RouterModule.forChild(PromotionRoutes),
    SharedModule,
    PromotionListModule,
  ],
})
export class PromotionModule {}
