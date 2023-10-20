import { NgModule } from '@angular/core';
import { PolicyComponent } from './policy.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PolicyRoutes } from './policy.routing';

@NgModule({
  imports: [RouterModule.forChild(PolicyRoutes), SharedModule],
  declarations: [PolicyComponent],
})
export class PolicyModule {}
