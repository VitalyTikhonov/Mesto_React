import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Popup from './Popup';
import PopupForm from './PopupForm';
import PopupViewImage from './PopupViewImage';
// import Footer from './Footer';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);

  function handleEditProfileClick(e) {
    setIsEditProfilePopupOpen(true);
  }

  function handleNewPlaceClick(e) {
    setIsAddCardPopupOpen(true);
  }

  function handleEditAvatarClick(e) {
    setIsEditAvatarPopupOpen(true);
  }

  // function handleEditProfileClick(e) {
  // }

  // function handleEditProfileClick(e) {
  // }

  return (
    <div className="root">
      <Header />

      <Main
        handleEditProfileClick={handleEditProfileClick}
        handleNewPlaceClick={handleNewPlaceClick}
        handleEditAvatarClick={handleEditAvatarClick}
      />

      <Popup isOpen={isEditProfilePopupOpen}>
        <PopupForm name='editProfile' title='Редактировать профиль'/>
      </Popup>

      <Popup isOpen={isEditAvatarPopupOpen}>
        <PopupForm name='changePhoto' title='Сменить аватар'/>
      </Popup>

      <Popup isOpen={isAddCardPopupOpen}>
        <PopupForm name='newPlace' title='Новое место'/>
      </Popup>

      <Popup>
        <PopupViewImage />
      </Popup>
    </div>
  );
}

export default App;
