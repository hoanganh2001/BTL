import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule {}
