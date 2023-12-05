import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { ClassicModule } from './classic/classic.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [SharedModule, ClassicModule, AdminModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent, ClassicModule, AdminModule],
})
export class LayoutModule {}
