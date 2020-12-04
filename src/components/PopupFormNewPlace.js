export function PopupFormNewPlace() {
  return (
    <>
      <h3 className="popup__title">Новое место</h3>
      <form className="popup__form" name="newPlace" noValidate>
        <input type="text" name="placeName" id="place-name" className="popup__input" placeholder="Название" required minLength={2} maxLength={30} />
        <span className="popup__error" id="place-name-error" />
        <input type="url" name="link" id="place-link" className="popup__input" placeholder="Ссылка на картинку" required />
        <span className="popup__error" id="place-link-error" />
        <button type="submit" className="button popup__button popup__button_type_plus" disabled />
      </form>
    </>
  )
}
