import { memo } from 'react';

const LoginInputSet = memo(function LoginInputSet(props) {
  const {
    handleInputChange,
    inputStateValues,
  } = props;

  return (
    <>
      <input type="email" name="email" value={inputStateValues.email} id="email" className="popup__input" onChange={handleInputChange} placeholder="Введите адрес электронной почты" required minLength={2} maxLength={30} />
      <span className="popup__error" id="email-error" />
      <input type="password" name="password" value={inputStateValues.password} id="password" className="popup__input" onChange={handleInputChange} placeholder="Введите пароль" required minLength={2} maxLength={30} />
      <span className="popup__error" id="password-error" />
    </>
  )
});

export default LoginInputSet;
