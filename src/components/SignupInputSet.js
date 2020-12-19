import { useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function SignupInputSet(props) {
  const {
    handleInputChange,
    inputState: { values, updater },
  } = props;

  const { userDescription, userName } = useContext(CurrentUserContext);

  useEffect(() => {
    updater({
      userName,
      userDescription,
    });
  }, [updater, userName, userDescription]); // updater добавлен, чтобы линтер не ругался. Как обойти?

  return (
    <>
      <input type="text" name="userName" value={values.userName} id="user-name" className="popup__input" onChange={handleInputChange} placeholder="Имя" required minLength={2} maxLength={30} />
      <span className="popup__error" id="user-name-error" />
      <input type="text" name="userDescription" value={values.userDescription} id="user-description" className="popup__input" onChange={handleInputChange} placeholder="О себе" required minLength={2} maxLength={30} />
      <span className="popup__error" id="user-description-error" />
      <input type="url" name="avatar" value={values.avatar} id="avatar" className="popup__input" onChange={handleInputChange} placeholder="Ссылка на аватар" required />
      <span className="popup__error" id="avatar-error" />
      <input type="email" name="email" value={values.email} id="email" className="popup__input" onChange={handleInputChange} placeholder="Введите адрес электронной почты" required minLength={2} maxLength={30} />
      <span className="popup__error" id="email-error" />
      <input type="password" name="password" value={values.password} id="password" className="popup__input" onChange={handleInputChange} placeholder="Введите пароль" required minLength={2} maxLength={30} />
      <span className="popup__error" id="password-error" />
    </>
  )
}

export default SignupInputSet;
