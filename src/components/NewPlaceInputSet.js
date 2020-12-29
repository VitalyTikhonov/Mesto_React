import { memo } from 'react';

const NewPlaceInputSet = memo(function NewPlaceInputSet(props) {
  const {
    handleFieldChange,
    handleFieldInput,
    inputStateValues,
    allowInput,
  } = props;

  return (
    <>
      <input type="text" name="placeName" value={inputStateValues.placeName} id="place-name" className="popup__input" onChange={handleFieldChange} onInput={handleFieldInput} placeholder="Название" required minLength={2} maxLength={30} disabled={!allowInput} />
      <span className="popup__error" id="place-name-error" />
      <input type="url" name="placeImagelink" value={inputStateValues.placeImagelink} id="place-link" className="popup__input" onChange={handleFieldChange} onInput={handleFieldInput} placeholder="Ссылка на картинку" required disabled={!allowInput} />
      <span className="popup__error" id="place-link-error" />
    </>
  )
});

export default NewPlaceInputSet;
