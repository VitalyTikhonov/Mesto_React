function PopupForm(props) {
  const {
    InputSet,
    inputState,
    inputState: { values, updater },
    contentsConfig: { name: popupName, title },
    updateData,
  } = props; // popupName введено вместо name для исключения конфликта с CurrentUserContext

  function handleInputChange(event) {
    const { name, value } = event.target;
    updater({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateData(values);
  }

  return (
    <div className="popup__content popup__content_type_form">
      <h3 className="popup__title">{title}</h3>
      <form className="popup__form" name={popupName} onSubmit={handleSubmit} noValidate>
        <InputSet handleInputChange={handleInputChange} inputState={inputState} />
        <button type="submit" className="button popup__button" >Сохранить</button> {/* disabled */}
        {
          popupName === "login"
          && (<p className="popup__prompt">или <span className="popup__prompt-link">зарегистрироваться</span></p>)
        }
        {
          popupName === "signup"
          && (<p className="popup__prompt">или <span className="popup__prompt-link">войти</span></p>)
        }
      </form>
    </div>
  )
}

export default PopupForm;
