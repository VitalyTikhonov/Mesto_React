function ChangePhotoForm(props) {
  const { values, updateValuesInState } = props;

  const { avatar } = values;

  function handleInputChange(event) {
    const { name, value } = event.target;
    updateValuesInState({
      ...values,
      [name]: value,
    });
  }

  return (
    <>
      <input type="url" name="avatar" value={avatar} id="avatar" className="popup__input" onChange={handleInputChange} placeholder="Ссылка на аватар" required />
      <span className="popup__error" id="avatar-error" />
    </>
  )
}

export default ChangePhotoForm;
