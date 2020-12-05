import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Popup from './Popup';
// import Footer from './Footer';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [formsMap] = useState({
    editProfile: { name: 'editProfile', title: 'Редактировать профиль' },
    changePhoto: { name: 'changePhoto', title: 'Сменить аватар' },
    newPlace: { name: 'newPlace', title: 'Новое место' }
  });

  function handlePopupControlClick(event) {
    switch (event.target.id) {
      case `${formsMap.editProfile.name}Elem`:
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
        break;
      case `${formsMap.changePhoto.name}Elem`:
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
        break;
      case `${formsMap.newPlace.name}Elem`:
        setIsAddCardPopupOpen(!isAddCardPopupOpen);
        break;
      default:
    }
  }

  return (
    <div className="root">
      <Header />

      <Main
        formsMap={formsMap}
        handlePopupControlClick={handlePopupControlClick}
      />

      { isEditProfilePopupOpen && (
        <Popup formConfig={formsMap.editProfile} handlePopupControlClick={handlePopupControlClick} />
      )}
      { isEditAvatarPopupOpen && (
        <Popup formConfig={formsMap.changePhoto} handlePopupControlClick={handlePopupControlClick} />
      )}
      { isAddCardPopupOpen && (
        <Popup formConfig={formsMap.newPlace} handlePopupControlClick={handlePopupControlClick} />
      )}

    </div>
  );
}

export default App;
