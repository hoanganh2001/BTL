import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SharedModule } from 'app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SharedModule, CommonModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule {}
