import { NgModule } from '@angular/core';
import { NewDetailComponent } from './new-detail.component';
import { SideBarNewModule } from 'app/shared/component/side-bar-new/side-bar-new.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [SharedModule, SideBarNewModule],
  declarations: [NewDetailComponent],
})
export class NewDetailModule {}
