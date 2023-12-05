import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes), SharedModule],
  declarations: [AdminComponent],
})
export class AdminModule {}
