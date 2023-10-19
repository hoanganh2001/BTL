import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContactRoutes } from './contact.routing';

@NgModule({
  imports: [RouterModule.forChild(ContactRoutes), SharedModule],
  declarations: [ContactComponent],
})
export class ContactModule {}
