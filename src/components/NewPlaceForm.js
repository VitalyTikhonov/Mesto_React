function NewPlaceForm(props) {
  const { values, updateValuesInState } = props;

  const { placeName, placeImagelink } = values;

  function handleInputChange(event) {
    const { name, value } = event.target;
    updateValuesInState({
      ...values,
      [name]: value,
    });
  }

  return (
    <>
      <input type="text" name="placeName" value={placeName} id="place-name" className="popup__input" onChange={handleInputChange} placeholder="Название" required minLength={2} maxLength={30} />
      <span className="popup__error" id="place-name-error" />
      <input type="url" name="placeImagelink" value={placeImagelink} id="place-link" className="popup__input" onChange={handleInputChange} placeholder="Ссылка на картинку" required />
      <span className="popup__error" id="place-link-error" />
    </>
  )
}

export default NewPlaceForm;
