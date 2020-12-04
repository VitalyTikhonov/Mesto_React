function PopupForm(props) {
  const { name, title } = props;

  return (
    <div className="popup__content popup__content_type_form">
      <h3 className="popup__title">{title}</h3>
      <form className="popup__form" name={name} noValidate>
        <input type="text" name="userName" id="user-name" className="popup__input" placeholder="Имя" required minLength={2} maxLength={30} />
        <span className="popup__error" id="user-name-error" />
        <input type="text" name="userAbout" id="user-about" className="popup__input" placeholder="О себе" required minLength={2} maxLength={30} />
        <span className="popup__error" id="user-about-error" />
        <button type="submit" className="button popup__button" disabled>Сохранить</button>
      </form>
    </div>
  )
}

export default PopupForm;
