import { useState, useEffect } from 'react';
import api from "../utils/Api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Popup from './Popup';
// import Footer from './Footer';
import { popupConfig } from '../configs/constants';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [popupMap] = useState(popupConfig);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    about: '',
    avatar: '',
    email: '',
    name: '',
    _id: '',
  });

  function updateUserData() {

  }

  useEffect(function () {
    async function fetchUserData() {
      const currentUserData = await api.getUserInfo();
      setCurrentUser(currentUserData);
    }
    fetchUserData();
  }, []);

  function handlePopupControlAction(event) {
    switch (event.target.id) {
      case `${popupMap.form.editProfile.name}OpenElem`:
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
        break;
      case `${popupMap.form.changePhoto.name}OpenElem`:
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
        break;
      case `${popupMap.form.newPlace.name}OpenElem`:
        setIsAddCardPopupOpen(!isAddCardPopupOpen);
        break;
      case `${popupMap.imageZoom.name}OpenElem`:
        const link = event.target.imageUrl;
        link
          ? setSelectedCard(link)
          : setSelectedCard(null);
        break;
      default:
    }
    document.activeElement.blur(); // Чтобы попап не закрывался по Enter
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />

        <Main
          popupMap={popupMap}
          handlePopupControlAction={handlePopupControlAction}
        />

        {isEditProfilePopupOpen && (
          <Popup
            contentsConfig={popupMap.form.editProfile}
            formsMap={popupMap.form}
            handlePopupControlAction={handlePopupControlAction}
            updateUserData={updateUserData}
          />
        )}
        {isEditAvatarPopupOpen && (
          <Popup
            contentsConfig={popupMap.form.changePhoto}
            formsMap={popupMap.form}
            handlePopupControlAction={handlePopupControlAction}
            updateUserData={updateUserData}
          />
        )}
        {isAddCardPopupOpen && (
          <Popup
            contentsConfig={popupMap.form.newPlace}
            formsMap={popupMap.form}
            handlePopupControlAction={handlePopupControlAction}
          />
        )}
        {selectedCard && (
          <Popup
            contentsConfig={popupMap.imageZoom}
            card={selectedCard}
            handlePopupControlAction={handlePopupControlAction}
          />
        )}

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
