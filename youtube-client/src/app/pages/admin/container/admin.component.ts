import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../shared/services/validation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(private fb: FormBuilder) { }

  maxDate = new Date();

  newCardForm = this.fb.group({
    title: ['', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ],
    }],
    description: ['', {
      validators: [Validators.maxLength(255)],
    }],
    img: ['', {
      validators: [
        Validators.required,
        ValidationService.urlValidator,
      ],
    }],
    video: ['', {
      validators: [
        Validators.required,
        ValidationService.urlValidator,
      ],
    }],
    date: ['', {
      validators: [
        Validators.required,
      ],
    }],
  });

  onSubmit(): void { }

  isFormControlValid(controlName: string): boolean {
    return ValidationService.isFormControlValid(
      this.newCardForm,
      controlName,
    );
  }

  getErrorMessage(controlName: string) {
    return ValidationService.getValidatorErrorMessage(
      this.newCardForm,
      controlName,
    );
  }
}
