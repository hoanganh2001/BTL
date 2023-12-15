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
import { MatSortModule } from '@angular/material/sort';
import { CreateProductComponent } from './product-management/create/create.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LightgalleryModule } from 'lightgallery/angular';

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
    MatSortModule,
    MatTabsModule,
    CKEditorModule,
    LightgalleryModule,
  ],
  declarations: [
    DashboardComponent,
    ProductManagementComponent,
    UserProfileComponent,
    CreateProductComponent,
  ],
})
export class AdminModule {}
