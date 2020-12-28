import { memo, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const EditProfileInputSet = memo(function EditProfileInputSet(props) {
  const {
    handleFieldChange,
    handleFieldInput,
    inputStateValues,
    inputStateUpdater,
  } = props;

  const { userDescription, userName } = useContext(CurrentUserContext);

  useEffect(() => {
    inputStateUpdater({
      userName,
      userDescription,
    });
  }, [inputStateUpdater, userName, userDescription]); // updater добавлен, чтобы линтер не ругался. Как обойти?

  return (
    <>
      <input type="text" name="userName" value={inputStateValues.userName} id="user-name" className="popup__input" onChange={handleFieldChange} onInput={handleFieldInput} placeholder="Имя" required minLength={2} maxLength={30} />
      <span className="popup__error" id="user-name-error" />
      <input type="text" name="userDescription" value={inputStateValues.userDescription} id="user-description" className="popup__input" onChange={handleFieldChange} onInput={handleFieldInput} placeholder="О себе" required minLength={2} maxLength={30} />
      <span className="popup__error" id="user-description-error" />
    </>
  )
});

export default EditProfileInputSet;
