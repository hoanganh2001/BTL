import { ResetPasswordRoutes } from './reset-password.routing';
import { NgModule } from '@angular/core';
import { ResetPasswordComponent } from './reset-password.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    RouterModule.forChild(ResetPasswordRoutes),
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  declarations: [ResetPasswordComponent],
})
export class ResetPasswordModule {}
