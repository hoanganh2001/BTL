import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {
  constructor(private toastyService: ToastrService) {}
  toastOptions = {
    closeButton: true,
    timeOut: 5000,
    progressBar: true,
    toastClass: 'ngx-toastr mt-16',
  };

  showSuccess(message: string) {
    this.toastyService.clear();
    this.toastyService.success(message, 'Notice', this.toastOptions);
  }

  showError(message: string) {
    this.toastyService.clear();
    this.toastyService.error(message, 'Notice', this.toastOptions);
  }

  showWarning(message: string, time?: number) {
    this.toastyService.clear();
    this.toastyService.warning(message, 'Notice', this.toastOptions);
  }

  showInfo(message: string) {
    this.toastyService.clear();
    this.toastyService.info(message, 'Notice', this.toastOptions);
  }
}
