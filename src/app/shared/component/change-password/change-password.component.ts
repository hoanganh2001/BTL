import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  NgForm,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'app/core/service/notification';
import { UserManagementSerivce } from 'app/modules/admin/user-management/user-management.service';
@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChangePasswordcomponent implements OnInit {
  @ViewChild('changePasswordNgForm') changePasswordNgForm: NgForm;

  changePasswordForm: UntypedFormGroup;

  id: any;
  showAlert: boolean = false;

  constructor(
    public matDialogRef: MatDialogRef<ChangePasswordcomponent>,
    private _formBuilder: UntypedFormBuilder,
    private _userManagementService: UserManagementSerivce,
    private _notiService: NotificationService,
    @Inject(MAT_DIALOG_DATA) data,
  ) {
    this.id = data.id;
  }

  ngOnInit(): void {
    //create the form
    this.changePasswordForm = this._formBuilder.group({
      newPassword: ['', [Validators.required, Validators.pattern('.{6,}')]],
    });
  }
  btnClose() {
    this.matDialogRef.close();
  }

  // Change password
  btnChange() {
    const data = {
      new_password: this.changePasswordForm.get('newPassword').value,
    };

    if (this.changePasswordForm.invalid) {
      return;
    }
    this.changePasswordForm.disable();
    this._userManagementService.changePassword(data, this.id).subscribe(
      (res) => {
        this._notiService.showSuccess(res.message);
        this.matDialogRef.close();
      },
      (error) => {
        this._notiService.showError(error?.err.message);
      },
    );
  }
}
