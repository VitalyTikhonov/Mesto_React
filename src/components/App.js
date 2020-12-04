import Header from './Header';
import Main from './Main';
import PopupWithForm from './FormNewPlace';
// import Footer from './Footer';
import closeImage from '../images/close.svg';

function App() {
  function handleEditProfileClick(e) {
    const popup = document.querySelector('.popup_type_edit-profile');
    popup.classList.add('popup_is-open');
  }

  function handleNewPlaceClick(e) {
    const popup = document.querySelector('.popup_type_new-place');
    popup.classList.add('popup_is-open');
  }

  // function handleEditAvatarClick(e) {
  //   const popup = document.querySelector('.popup_type_change-photo');
  //   popup.classList.add('popup_is-open');
  // }

  // function handleEditProfileClick(e) {
  //   const popup = document.querySelector('.popup_type_edit-profile');
  //   popup.classList.add('popup_is-open');
  // }

  // function handleEditProfileClick(e) {
  //   const popup = document.querySelector('.popup_type_edit-profile');
  //   popup.classList.add('popup_is-open');
  // }

  return (
    <div className="root">
      <Header />
      <Main handleEditProfileClick={handleEditProfileClick} handleNewPlaceClick={handleNewPlaceClick} />
      <div className="popup popup_type_new-place" tabIndex={0}>
        <div className="popup__content popup__content_type_form">
          <img src={closeImage} alt="Close" className="popup__close" />
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form" name="newPlace" noValidate>
            <input type="text" name="placeName" id="place-name" className="popup__input" placeholder="Название" required minLength={2} maxLength={30} />
            <span className="popup__error" id="place-name-error" />
            <input type="url" name="link" id="place-link" className="popup__input" placeholder="Ссылка на картинку" required />
            <span className="popup__error" id="place-link-error" />
            <button type="submit" className="button popup__button popup__button_type_plus" disabled />
          </form>
        </div>
      </div>
      <div className="popup popup_type_edit-profile" tabIndex={0}>
        <div className="popup__content popup__content_type_form">
          <img src={closeImage} alt="Close" className="popup__close" />
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form" name="editProfile" noValidate>
            <input type="text" name="userName" id="user-name" className="popup__input" placeholder="Имя" required minLength={2} maxLength={30} />
            <span className="popup__error" id="user-name-error" />
            <input type="text" name="userAbout" id="user-about" className="popup__input" placeholder="О себе" required minLength={2} maxLength={30} />
            <span className="popup__error" id="user-about-error" />
            <button type="submit" className="button popup__button" disabled>Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_change-photo">
        <div className="popup__content popup__content_type_form">
          <img src={closeImage} alt="Close" className="popup__close" />
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form" name="changePhoto" noValidate>
            <input type="url" name="avatar" id="avatar" className="popup__input" placeholder="Ссылка на аватар" required />
            <span className="popup__error" id="avatar-error" />
            <button type="submit" className="button popup__button" disabled>Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_image-view-card">
        <div className="popup__content popup__content_type_image-view-card">
          <img src={closeImage} alt="Close" className="popup__close" />
          <img src alt="" className="popup__image" tabIndex={0} />
        </div>
      </div>
    </div>
  );
}

export default App;
