import { NgModule } from '@angular/core';
import { BrandListComponent } from './brand-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [BrandListComponent],
})
export class BrandListModule {}
