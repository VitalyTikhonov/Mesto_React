import { memo } from 'react';

const ChangePhotoInputSet = memo(function ChangePhotoInputSet(props) {
  const {
    handleFieldChange,
    handleFieldInput,
    inputStateValues,
    allowInput,
  } = props;

  return (
    <>
      <input type="url" name="avatar" value={inputStateValues.avatar} id="avatar" className="popup__input" onChange={handleFieldChange} onInput={handleFieldInput} placeholder="Ссылка на аватар" required disabled={!allowInput} />
      <span className="popup__error" id="avatar-error" />
    </>
  )
});

export default ChangePhotoInputSet;
