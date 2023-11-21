import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [SharedModule, MatInputModule, MatFormFieldModule],
  declarations: [AccountComponent],
  exports: [AccountComponent],
})
export class AccountModule {}
