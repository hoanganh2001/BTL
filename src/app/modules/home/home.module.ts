import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(HomeRoutes)],
  declarations: [HomeComponent],
})
export class HomeModule {}
