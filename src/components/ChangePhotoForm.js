function ChangePhotoForm(props) {
  const {
    values,
    updateValuesInState,
    updateData,
    contentsConfig: { name: popupName },
  } = props;

  const { avatar } = values;

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
      <input type="url" name="avatar" value={avatar} id="avatar" className="popup__input" onChange={handleInputChange} placeholder="Ссылка на аватар" required />
      <span className="popup__error" id="avatar-error" />
      <button type="submit" className="button popup__button" >Сохранить</button> {/* disabled */}
    </form>
  )
}

export default ChangePhotoForm;
