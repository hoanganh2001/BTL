import { NgModule } from '@angular/core';
import { SideBarNewComponent } from './side-bar-new.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [SideBarNewComponent],
  exports: [SideBarNewComponent],
})
export class SideBarNewModule {}
