import { useEffect, useContext } from 'react';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function LoginInputSet(props) {
  const {
    handleInputChange,
    inputState: { values, updater },
  } = props;

  // const { userDescription, userName } = useContext(CurrentUserContext);

  // useEffect(() => {
  //   updater({
  //     userName,
  //     userDescription,
  //   });
  // }, [updater, userName, userDescription]); // updater добавлен, чтобы линтер не ругался. Как обойти?

  return (
    <>
      <input type="email" name="email" value={values.email} id="email" className="popup__input" onChange={handleInputChange} placeholder="Введите адрес электронной почты" required minLength={2} maxLength={30} />
      <span className="popup__error" id="email-error" />
      <input type="password" name="password" value={values.password} id="password" className="popup__input" onChange={handleInputChange} placeholder="Введите пароль" required minLength={2} maxLength={30} />
      <span className="popup__error" id="password-error" />
    </>
  )
}

export default LoginInputSet;
