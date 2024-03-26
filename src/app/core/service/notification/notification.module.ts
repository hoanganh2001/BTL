import { NgModule } from '@angular/core';
import { NotificationService } from './notification.service';

@NgModule({
  providers: [NotificationService],
})
export class NotificationModule {
  /**
   * Constructor
   */
  constructor(private _notificationService: NotificationService) {}
}