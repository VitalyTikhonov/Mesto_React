function EditProfileForm(props) {
  const { values, updateValuesInState } = props;

  const { userName, userDescription } = values;

  function handleInputChange(event) {
    const { name, value } = event.target;
    updateValuesInState({
      ...values,
      [name]: value,
    });
  }

  return (
    <>
      <input type="text" name="userName" value={userName} id="user-name" className="popup__input" onChange={handleInputChange} placeholder="Имя" required minLength={2} maxLength={30} />
      <span className="popup__error" id="user-name-error" />
      <input type="text" name="userDescription" value={userDescription} id="user-description" className="popup__input" onChange={handleInputChange} placeholder="О себе" required minLength={2} maxLength={30} />
      <span className="popup__error" id="user-description-error" />
    </>
  )
}

export default EditProfileForm;
