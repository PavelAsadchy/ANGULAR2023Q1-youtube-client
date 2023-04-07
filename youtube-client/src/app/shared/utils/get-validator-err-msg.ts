import { ValidatorErrorConfig } from '../models/validation-service.model';

export class GetValidatorErrMessage {
  static createConfig(
    controlName: string,
    requiredLength: number,
  ): ValidatorErrorConfig {
    return {
      required: {
        message: `Please enter ${controlName}`,
      },
      email: {
        message: 'The login email is invalid',
      },
      invalidCreditCard: {
        message: 'Is invalid credit card number',
      },
      invalidEmailAddress: {
        message: 'Invalid email address',
      },
      invalidPassword: {
        message: "Your password isn't strong enough",
        tips: 'Must be at least 8 characters long, contain numeric values, uppercase, lowercase and special characters',
      },
      minlength: {
        message: `Minimum length ${requiredLength}`,
      },
      maxlength: {
        message: `Maximum length ${requiredLength}`,
      },
      invalidUrl: {
        message: `The ${controlName} link is invalid`,
      },
    };
  }
}