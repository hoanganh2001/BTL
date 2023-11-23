import { SignInRoutes } from './sign-in.routing';
import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    RouterModule.forChild(SignInRoutes),
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  declarations: [SignInComponent],
})
export class SignInModule {}
