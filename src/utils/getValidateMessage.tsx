import { MessageParams } from 'yup';

const enum ValidateMessage {
  REQUIRED_ACCEPT = 'Vui lòng chấp nhập',
  REQUIRED = 'không được để trống',
  INVALID = 'không hợp lệ',
  NOT_MATCH = 'không khớp',
  REQUIRED_NUMBER_TYPE = 'phải là kiểu kí tự số',
  REQUIRED_BOOLEAN_TYPE = 'phải là kiểu kí tự Boolean',
}

export function validateRequireAccept({ label }: MessageParams) {
  return ValidateMessage.REQUIRED_ACCEPT + ' ' + label;
}

export function validateRequireMessage({ label }: MessageParams) {
  return label + ' ' + ValidateMessage.REQUIRED;
}

export function validateInvalidMessage({ label }: MessageParams) {
  return label + ' ' + ValidateMessage.INVALID;
}

export function validateNotMatchMessage({ label }: MessageParams) {
  return label + ' ' + ValidateMessage.NOT_MATCH;
}

export function validateRequireNumberType({ label }: MessageParams) {
  return label + ' ' + ValidateMessage.REQUIRED_NUMBER_TYPE;
}

export function validateRequireBooleanType({ label }: MessageParams) {
  return label + ' ' + ValidateMessage.REQUIRED_BOOLEAN_TYPE;
}
