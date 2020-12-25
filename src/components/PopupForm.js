import { memo } from 'react';

const PopupForm = memo(function PopupForm(props) {
  const {
    InputSet,
    inputStateValues,
    inputStateUpdater,
    contentsConfig: { name: popupName, title },
    updateData,
    toggleAuthDialog,
  } = props; // popupName введено вместо name для исключения конфликта с CurrentUserContext

  function handleInputChange(event) {
    const { name, value } = event.target;
    inputStateUpdater({
      ...inputStateValues,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateData(inputStateValues);
  }

  return (
    <div className="popup__content popup__content_type_form">
      <h3 className="popup__title">{title}</h3>
      <form className="popup__form" name={popupName} onSubmit={handleSubmit} noValidate>
        <InputSet
          handleInputChange={handleInputChange}
          inputStateValues={inputStateValues}
          inputStateUpdater={inputStateUpdater}
        />
        <button type="submit" className="button popup__button" >Сохранить</button> {/* disabled */}
        {
          popupName === "login"
          && (
            <p className="popup__prompt">
              или <span className="popup__prompt-link" onClick={toggleAuthDialog}>зарегистрироваться</span>
            </p>
          )
        }
        {
          popupName === "signup"
          && (
            <p className="popup__prompt">
              или <span className="popup__prompt-link" onClick={toggleAuthDialog}>войти</span>
            </p>
          )
        }
      </form>
    </div>
  )
});

export default PopupForm;
