import { memo, useEffect, useState, useRef } from 'react';
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
    controlPopupDisplay,
    auxPopupText,
    // setAuxPopupText,
    apiResponseObtained,
    setApiResponseObtained,
    setAllowPopupClose,
  } = props; // popupName введено вместо name для исключения конфликта с CurrentUserContext

  const [allowInput, setAllowInput] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonLabel, setButtonLabel] = useState(submitButtonLabel);

  const formRef = useRef();

  function handleFieldChange(event) {
    // setButtonDisabled(!checkForm());
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

  function toggleButtonText(normal) {
    if (normal) {
      setButtonLabel(submitButtonLabel);
    } else {
      setButtonLabel('Подождите...');
    }
  }

  function checkForm() {
    // const res = formRef.current.checkValidity();
    // console.log('res', res);
    // return res;
    return formRef.current.checkValidity();
  }

  function blockForm() {
    setButtonDisabled(true);
    // console.log('buttonDisabled', buttonDisabled);
    setAllowInput(false);
    toggleButtonText(false);
    setAllowPopupClose(false);
  }

  function unBlockForm() {
    setButtonDisabled(false);
    setAllowInput(true);
    toggleButtonText(true);
    setAllowPopupClose(true);
  }

  function handleFieldInput(event) {
    const inputNode = event.target;
    formValidator.checkField(inputNode);
    updateErrorMessage(inputNode);
    // setButtonDisabled(!checkForm());
    /* Если и здесь, и в useEffect, то это дублирование операции. Если только здесь, то "Редактировать профиль"
    открывается с заблок. кнопкой несмотря на правильную автоподстановку */
  }


  function handleSubmit(event) {
    event.preventDefault();
    if (InputSet) {
      blockForm();
      // setTimeout(() => updateData(inputStateValues), 5000);
      updateData(inputStateValues);
    } else {
      controlPopupDisplay(false);
    }
  }

  useEffect(() => {
    apiResponseObtained && unBlockForm();
    setApiResponseObtained(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiResponseObtained]);

  useEffect(() => {
    setButtonDisabled(!checkForm());
    // console.log('popupName inputStateValues', popupName, inputStateValues);
  }, [inputStateValues]);
  /* Если добавить здесь [], кнопка в форме "Редактировать профиль" не разблокируется несмотря на правильную автоподстановку.
  Если не указывать массив зависимостей вообще, кнопка отправки не блокируется на время ожидания запроса. */

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
            allowInput={allowInput}
          />
        }
        {auxPopupText &&
          <p>{auxPopupText}</p>
        }
        <button type="submit" className="button button__square_black-outline-white popup__button" disabled={InputSet ? buttonDisabled : false} autoFocus>{buttonLabel}</button>
        {/* autoFocus – чтобы малое окно закрывалось по Enter (поскольку в нем нет полей, само оно в фокус не попадало; в попапах с формами
          этот автофокус снимается за счет автоподстановки) */}
        {
          (popupName === "login" || popupName === "signup") && (
            <p className="popup__prompt">
              или <span className="popup__prompt-link" onClick={allowInput ? toggleAuthDialog : null}>{promptLinkLabel}</span>
            </p>
          )
        }
      </form>
    </div>
  )
});

export default PopupForm;
