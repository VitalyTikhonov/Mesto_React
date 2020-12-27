import { errorMessages } from '../constants/constants';
import { getAsNumberAndLastDigit } from './utils';

class FormValidator {
  checkField(inputNode) {
    if (inputNode.validity.valueMissing) {
      inputNode.setCustomValidity(errorMessages.empty);
    } else if (inputNode.validity.tooShort) {
      const lengthValue = inputNode.getAttribute('minlength');
      const lengthValueProcessed = getAsNumberAndLastDigit(lengthValue);
      inputNode.setCustomValidity(errorMessages.tooShort(lengthValueProcessed));
    } else if (inputNode.validity.tooLong) {
      const lengthValue = inputNode.getAttribute('maxlength');
      const lengthValueProcessed = getAsNumberAndLastDigit(lengthValue);
      inputNode.setCustomValidity(errorMessages.tooLong(lengthValueProcessed));
    } else if (inputNode.validity.typeMismatch) {
      inputNode.setCustomValidity(errorMessages.wrongType);
    } else {
      inputNode.setCustomValidity('');
    }
  }
}

const formValidator = new FormValidator();
export default formValidator;
