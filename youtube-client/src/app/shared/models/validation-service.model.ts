export interface ValidatorError {
  message: string;
  tips?: string;
}

export interface ValidatorErrorConfig {
  [key: string]: ValidatorError;
}
