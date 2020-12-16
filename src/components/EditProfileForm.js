function EditProfileForm(props) {
  const {
    values,
    updateValuesInState,
    updateData,
    contentsConfig: { name: popupName },
  } = props;

  const { userName, userDescription } = values;

  function handleInputChange(event) {
    const { name, value } = event.target;
    updateValuesInState({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateData(values);
  }

  return (
    <form className="popup__form" name={popupName} onSubmit={handleSubmit} noValidate>
      <input type="text" name="userName" value={userName} id="user-name" className="popup__input" onChange={handleInputChange} placeholder="Имя" required minLength={2} maxLength={30} />
      <span className="popup__error" id="user-name-error" />
      <input type="text" name="userDescription" value={userDescription} id="user-description" className="popup__input" onChange={handleInputChange} placeholder="О себе" required minLength={2} maxLength={30} />
      <span className="popup__error" id="user-description-error" />
      <button type="submit" className="button popup__button" >Сохранить</button> {/* disabled */}
    </form>
  )
}

export default EditProfileForm;
