import { useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function ChangePhotoForm(props) {
  const {
    handleInputChange,
    inputState: { values, updater },
  } = props;

  const { avatar } = useContext(CurrentUserContext);

  useEffect(() => {
    updater({ avatar });
  }, [updater, avatar]); // updater добавлен, чтобы линтер не ругался. Как обойти?

  return (
    <>
      <input type="url" name="avatar" value={values.avatar} id="avatar" className="popup__input" onChange={handleInputChange} placeholder="Ссылка на аватар" required />
      <span className="popup__error" id="avatar-error" />
    </>
  )
}

export default ChangePhotoForm;
