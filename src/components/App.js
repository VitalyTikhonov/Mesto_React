import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Popup from './Popup';
import PopupForm from './PopupForm';
// import PopupViewImage from './PopupViewImage';
// import Footer from './Footer';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);

  function handleEditProfileControlClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleNewPlaceControlClick() {
    setIsAddCardPopupOpen(!isAddCardPopupOpen);
  }

  function handleEditAvatarControlClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  return (
    <div className="root">
      <Header />

      <Main
        handleEditProfileClick={handleEditProfileControlClick}
        handleNewPlaceClick={handleNewPlaceControlClick}
        handleEditAvatarClick={handleEditAvatarControlClick}
      />

      <Popup isOpen={isEditProfilePopupOpen} handleClosePopupClick={handleEditProfileControlClick}>
        <PopupForm name='editProfile' title='Редактировать профиль'/>
      </Popup>

      <Popup isOpen={isEditAvatarPopupOpen} handleClosePopupClick={handleEditAvatarControlClick}>
        <PopupForm name='changePhoto' title='Сменить аватар'/>
      </Popup>

      <Popup isOpen={isAddCardPopupOpen} handleClosePopupClick={handleNewPlaceControlClick}>
        <PopupForm name='newPlace' title='Новое место'/>
      </Popup>
    </div>
  );
}

export default App;
