import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { ClassicModule } from './classic/classic.module';

@NgModule({
  imports: [SharedModule, ClassicModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent, ClassicModule],
})
export class LayoutModule {}
