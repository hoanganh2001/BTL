import { NgModule } from '@angular/core';
import { NewDetailComponent } from './new-detail.component';
import { SideBarNewModule } from 'src/app/shared/component/side-bar-new/side-bar-new.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, SideBarNewModule],
  declarations: [NewDetailComponent],
})
export class NewDetailModule {}
