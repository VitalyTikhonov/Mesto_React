import { memo } from 'react';

const SignupInputSet = memo(function SignupInputSet(props) {
  const {
    handleFieldChange,
    handleFieldInput,
    inputStateValues,
    allowInput,
  } = props;

  return (
    <>
      <input type="text" name="userName" value={inputStateValues.userName} id="user-name" className="popup__input" onChange={handleFieldChange} onInput={handleFieldInput} placeholder="Имя" required minLength={2} maxLength={30} disabled={!allowInput} />
      <span className="popup__error" id="user-name-error" />
      <input type="text" name="userDescription" value={inputStateValues.userDescription} id="user-description" className="popup__input" onChange={handleFieldChange} onInput={handleFieldInput} placeholder="О себе" required minLength={2} maxLength={30} disabled={!allowInput} />
      <span className="popup__error" id="user-description-error" />
      <input type="url" name="avatar" value={inputStateValues.avatar} id="avatar" className="popup__input" onChange={handleFieldChange} onInput={handleFieldInput} placeholder="Ссылка на аватар" required disabled={!allowInput} />
      <span className="popup__error" id="avatar-error" />
      <input type="email" name="email" value={inputStateValues.email} id="email" className="popup__input" onChange={handleFieldChange} onInput={handleFieldInput} placeholder="Адрес электронной почты" required minLength={2} maxLength={30} disabled={!allowInput} />
      <span className="popup__error" id="email-error" />
      <input type="password" name="password" value={inputStateValues.password} id="password" className="popup__input" onChange={handleFieldChange} onInput={handleFieldInput} placeholder="Пароль" required minLength={2} maxLength={30} disabled={!allowInput} />
      <span className="popup__error" id="password-error" />
    </>
  )
});

export default SignupInputSet;
