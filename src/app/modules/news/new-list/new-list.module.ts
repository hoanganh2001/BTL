import { NgModule } from '@angular/core';
import { NewListComponent } from './new-list.component';
import { SharedModule } from 'app/shared/shared.module';
import { SideBarNewModule } from 'app/shared/component/side-bar-new/side-bar-new.module';

@NgModule({
  imports: [SharedModule, SideBarNewModule],
  declarations: [NewListComponent],
})
export class NewListModule {}
