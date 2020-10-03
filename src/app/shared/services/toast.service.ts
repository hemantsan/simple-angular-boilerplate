import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  notifications;

  constructor(private toastr: ToastrService) {}

  showToast(content: any) {
    if (content.status === 'success') {
      this.toastr.success(content.message, content.title);
    }
    else if (content.status === 'error') {
      this.toastr.error(content.message, content.title);
    }
  }
}
