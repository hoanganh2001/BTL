import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [SharedModule, MatMenuModule, MatButtonModule],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule {}
