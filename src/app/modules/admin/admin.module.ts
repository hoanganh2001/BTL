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
import { MatSortModule } from '@angular/material/sort';
import { CreateProductComponent } from './product-management/create/create.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LightgalleryModule } from 'lightgallery/angular';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryManagementComponent } from './category-management/category.component';
import { NewsManagementComponent } from './news-management/news.component';
import { OrderManagementComponent } from './order-management/order.component';
import { SpecificationTemplateManagementComponent } from './specification-template/specification-template.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreateNewComponent } from './news-management/create/create.component';
import { CreateUserComponent } from './user-management/create/create.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChangePasswordModule } from 'app/shared/component/change-password/change-password.module';

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
    MatTableModule,
    MatDialogModule,
    MatTreeModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    ChangePasswordModule,
  ],
  declarations: [
    DashboardComponent,
    ProductManagementComponent,
    CreateProductComponent,
    OrderManagementComponent,
    CategoryManagementComponent,
    NewsManagementComponent,
    UserManagementComponent,
    SpecificationTemplateManagementComponent,
    CreateNewComponent,
    CreateUserComponent,
  ],
})
export class AdminModule {}
