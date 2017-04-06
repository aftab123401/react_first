
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Passwords is required';
  }
  if (Validator.isEmpty(data.confirmpassword)) {
    errors.confirmpassword = 'This field is required';
  }
  if (!Validator.equals(data.password, data.confirmpassword)) {
    errors.confirmpassword = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}