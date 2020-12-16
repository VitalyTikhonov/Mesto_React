function NewPlaceForm(props) {
  const {
    values,
    updateValuesInState,
    updateData,
    contentsConfig: { name: popupName },
  } = props;

  const { placeName, placeImagelink } = values;

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
      <input type="text" name="placeName" value={placeName} id="place-name" className="popup__input" onChange={handleInputChange} placeholder="Название" required minLength={2} maxLength={30} />
      <span className="popup__error" id="place-name-error" />
      <input type="url" name="placeImagelink" value={placeImagelink} id="place-link" className="popup__input" onChange={handleInputChange} placeholder="Ссылка на картинку" required />
      <span className="popup__error" id="place-link-error" />
      <button type="submit" className="button popup__button" >Сохранить</button> {/* disabled */}
    </form>
  )
}

export default NewPlaceForm;
