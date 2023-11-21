import { NgModule } from '@angular/core';
import { SubMenuComponent } from './sub-menu.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [SubMenuComponent],
  exports: [SubMenuComponent],
})
export class SubMenuModule {}
