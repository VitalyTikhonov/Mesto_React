function NewPlaceInputSet(props) {
  const {
    handleInputChange,
    inputState: { values },
  } = props;

  return (
    <>
      <input type="text" name="placeName" value={values.placeName} id="place-name" className="popup__input" onChange={handleInputChange} placeholder="Название" required minLength={2} maxLength={30} />
      <span className="popup__error" id="place-name-error" />
      <input type="url" name="placeImagelink" value={values.placeImagelink} id="place-link" className="popup__input" onChange={handleInputChange} placeholder="Ссылка на картинку" required />
      <span className="popup__error" id="place-link-error" />
    </>
  )
}

export default NewPlaceInputSet;
