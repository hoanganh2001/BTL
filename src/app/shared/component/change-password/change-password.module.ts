import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'app/shared/shared.module';
import { ChangePasswordcomponent } from './change-password.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ChangePasswordcomponent],
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    SharedModule,
    MatButtonModule,
  ],
  exports: [ChangePasswordcomponent],
})
export class ChangePasswordModule {}
