export function PopupFormChangePhoto() {
  return (
    <>
      <h3 className="popup__title">Обновить аватар</h3>
      <form className="popup__form" name="changePhoto" noValidate>
        <input type="url" name="avatar" id="avatar" className="popup__input" placeholder="Ссылка на аватар" required />
        <span className="popup__error" id="avatar-error" />
        <button type="submit" className="button popup__button" disabled>Сохранить</button>
      </form>
    </>
  )
}
