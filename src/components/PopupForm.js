function PopupForm(props) {
  const { formsMap, formConfig: { name, title } } = props;

  return (
    <div className="popup__content popup__content_type_form">
      <h3 className="popup__title">{title}</h3>
      <form className="popup__form" name={name} noValidate>
        {name === formsMap.editProfile.name &&
          (<>
            <input type="text" name="userName" id="user-name" className="popup__input" placeholder="Имя" required minLength={2} maxLength={30} />
            <span className="popup__error" id="user-name-error" />
            <input type="text" name="userAbout" id="user-about" className="popup__input" placeholder="О себе" required minLength={2} maxLength={30} />
            <span className="popup__error" id="user-about-error" />
          </>)}
        {name === formsMap.newPlace.name &&
          (<>
            <input type="text" name="placeName" id="place-name" className="popup__input" placeholder="Название" required minLength={2} maxLength={30} />
            <span className="popup__error" id="place-name-error" />
            <input type="url" name="link" id="place-link" className="popup__input" placeholder="Ссылка на картинку" required />
            <span className="popup__error" id="place-link-error" />
          </>)}
        {name === formsMap.changePhoto.name &&
          (<>
            <input type="url" name="avatar" id="avatar" className="popup__input" placeholder="Ссылка на аватар" required />
            <span className="popup__error" id="avatar-error" />
          </>)}
        <button type="submit" className="button popup__button" disabled>Сохранить</button>
      </form>
    </div>
  )
}

export default PopupForm;
