import { NgModule } from '@angular/core';
import { NewListComponent } from './new-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [NewListComponent],
})
export class NewListModule {}
