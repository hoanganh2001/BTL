import { NgModule } from '@angular/core';
import { NewListComponent } from './new-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SideBarNewModule } from 'src/app/shared/component/side-bar-new/side-bar-new.module';

@NgModule({
  imports: [SharedModule, SideBarNewModule],
  declarations: [NewListComponent],
})
export class NewListModule {}