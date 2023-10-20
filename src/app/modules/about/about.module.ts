import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRoutes } from './about.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [RouterModule.forChild(AboutRoutes), SharedModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
