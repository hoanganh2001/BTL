import { NgModule } from '@angular/core';
import { AdminRoutes } from './admin.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProductManagementComponent } from './product-management/product.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserProfileComponent } from './user-profile/user-profile.component';
@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatPaginatorModule,
  ],
  declarations: [
    DashboardComponent,
    ProductManagementComponent,
    UserProfileComponent,
  ],
})
export class AdminModule {}
