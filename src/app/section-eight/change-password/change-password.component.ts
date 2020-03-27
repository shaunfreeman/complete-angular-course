import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
        current: ['', Validators.required, PasswordValidator.checkPassword],
        new: ['', Validators.required],
        confirm: ['', Validators.required]
      }, { validators: PasswordValidator.passwordsShouldMatch });
  }

  get oldPassword(): AbstractControl {
    return this.form.get('current');
  }

  get newPassword(): AbstractControl {
    return this.form.get('new');
  }

  get confirmPassword(): AbstractControl {
    return this.form.get('confirm');
  }

  login(value) {
    console.log(value);
  }
}
