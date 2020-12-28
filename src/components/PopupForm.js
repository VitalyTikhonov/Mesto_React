import { memo, useEffect, useRef } from 'react';
import formValidator from '../utils/FormValidator';
// import { popupConfig } from '../constants/constants';

const PopupForm = memo(function PopupForm(props) {
  const {
    InputSet,
    inputStateValues,
    inputStateUpdater,
    // auxPopup: { name: auxPopupName },
    contentsConfig: { name: popupName, title, promptLinkLabel, submitButtonLabel },
    updateData,
    toggleAuthDialog,
    // handlePopupControlAction,
    setPopupOpenVariable,
    auxPopupText,
    // setAuxPopupText,
    apiResponseObtained,
    setApiResponseObtained,
  } = props; // popupName введено вместо name для исключения конфликта с CurrentUserContext

  const submitButtonRef = useRef();
  const formRef = useRef();

  function handleFieldChange(event) {
    const { name, value } = event.target;
    inputStateUpdater({
      ...inputStateValues,
      [name]: value,
    });
  }

  function updateErrorMessage(inputNode) {
    const currentErrorMessageElement = document
      .querySelector(`#${inputNode.id}-error`);
    currentErrorMessageElement.textContent = inputNode.validationMessage;
  }

  function toggleButtonState(isFormValid) {
    // console.log('isFormValid', isFormValid);
    if (isFormValid) {
      submitButtonRef.current.removeAttribute('disabled');
    } else {
      submitButtonRef.current.setAttribute('disabled', 'disabled');
    }
  }

  function toggleButtonText(normal) {
    if (normal) {
      submitButtonRef.current.textContent = submitButtonLabel;
    } else {
      submitButtonRef.current.textContent = 'Подождите...';
    }
  }

  function checkForm() {
    const res = formRef.current.checkValidity()
    //   console.log('res, res;
    return res;
    // return formRef.current.checkValidity();
  }

  function blockForm() {
    // toggleInputsState(false);
    toggleButtonState(false);
    toggleButtonText(false);
  }

  function unBlockForm() {
    // toggleInputsState(true);
    toggleButtonState(checkForm());
    toggleButtonText(true);
  }

  function handleFieldInput(event) {
    const inputNode = event.target;
    formValidator.checkField(inputNode);
    updateErrorMessage(inputNode);
    toggleButtonState(checkForm());
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (InputSet) {
      blockForm();
      updateData(inputStateValues)
    } else {
      setPopupOpenVariable(false);;
    }
  }

  useEffect(() => {
    apiResponseObtained && unBlockForm();
    setApiResponseObtained(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiResponseObtained]);

  useEffect(() => {
    toggleButtonState(checkForm());
  });

  return (
    <div className="popup__content popup__content_type_form">
      <h3 className="popup__title">{title}</h3>
      <form className="popup__form" ref={formRef} name={popupName} onSubmit={handleSubmit} noValidate>
        {InputSet &&
          <InputSet
            handleFieldChange={handleFieldChange}
            handleFieldInput={handleFieldInput}
            inputStateValues={inputStateValues}
            inputStateUpdater={inputStateUpdater}
          />
        }
        {auxPopupText &&
          <p>{auxPopupText}</p>
        }
        <button type="submit" className="button button__square_black-outline-white popup__button" ref={submitButtonRef} >{submitButtonLabel}</button>
        {
          (popupName === "login" || popupName === "signup")
          && (
            <p className="popup__prompt">
              или <span className="popup__prompt-link" onClick={toggleAuthDialog}>{promptLinkLabel}</span>
            </p>
          )
        }
      </form>
    </div>
  )
});

export default PopupForm;
