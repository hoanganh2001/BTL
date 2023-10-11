import { NgModule } from '@angular/core';
import { ClassicComponent } from './classic.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [SharedModule, RouterModule],
  declarations: [ClassicComponent],
  exports: [ClassicComponent],
})
export class ClassicModule {}
