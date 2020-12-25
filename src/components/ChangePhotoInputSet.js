import { memo } from 'react';

const ChangePhotoInputSet = memo(function ChangePhotoInputSet(props) {
  const {
    handleInputChange,
    inputStateValues,
  } = props;

  return (
    <>
      <input type="url" name="avatar" value={inputStateValues.avatar} id="avatar" className="popup__input" onChange={handleInputChange} placeholder="Ссылка на аватар" required />
      <span className="popup__error" id="avatar-error" />
    </>
  )
});

export default ChangePhotoInputSet;
