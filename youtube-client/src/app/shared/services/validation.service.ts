import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  static isFormControlValid(
    form: FormGroup,
    controlName: string,
  ): boolean {
    const control = form.get(controlName);
    if (!control) return true;

    return control.touched && control.invalid;
  }

  static getValidatorErrorMessage(
    form: FormGroup,
    controlName: string,
  ): string {
    const control = form.get(controlName);
    if (!control || !control.touched || !control.errors) return '';
  
    const validationPropertyName = Object.keys(control.errors)[0];
    const config: { [key: string]: string } = {
      required: `Please enter ${controlName}`,
      email: 'The login email is invalid',
      invalidCreditCard: 'Is invalid credit card number',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword:
        'Invalid password. Password must be at least 6 characters long, and contain a number.',
      minlength: `Minimum length ${control.errors['minlength']?.requiredLength}`,
    };

    return config[validationPropertyName];
  }

  static creditCardValidator(control: FormControl) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (
      control.value.match(
        /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
      )
    ) {
      return null;
    } else {
      return { invalidCreditCard: true };
    }
  }

  static emailValidator(control: FormControl) {
    // RFC 2822 compliant regex
    if (
      control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  static passwordValidator(control: FormControl) {
    // - length greater than or equal to 8
    // - contains one or more uppercase characters
    // - contains one or more lowercase characters
    // - contains one or more numeric values
    // - contains one or more special characters
    if (
      control.value.match(
        /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        // /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,100}$/
      )
    ) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }
}
