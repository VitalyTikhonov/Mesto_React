import { memo } from 'react';

const ChangePhotoInputSet = memo(function ChangePhotoInputSet(props) {
  const {
    handleFieldChange,
    handleFieldInput,
    inputStateValues,
  } = props;

  return (
    <>
      <input type="url" name="avatar" value={inputStateValues.avatar} id="avatar" className="popup__input" onChange={handleFieldChange} placeholder="Ссылка на аватар" required />
      <span className="popup__error" id="avatar-error" />
    </>
  )
});

export default ChangePhotoInputSet;
