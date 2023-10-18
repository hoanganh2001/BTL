import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewListModule } from './new-list/new-list.module';
import { RouterModule } from '@angular/router';
import { NewsRoutes } from './news.routing';

@NgModule({
  imports: [RouterModule.forChild(NewsRoutes), SharedModule, NewListModule],
})
export class NewsModule {}
