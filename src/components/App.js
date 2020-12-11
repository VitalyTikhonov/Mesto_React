import { useState } from 'react';
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
  }

  return (
    <div className="root">
      <Header />

      <Main
        popupMap={popupMap}
        handlePopupControlAction={handlePopupControlAction}
      />

      { isEditProfilePopupOpen && (
        <Popup
          contentsConfig={popupMap.form.editProfile}
          formsMap={popupMap.form}
          handlePopupControlAction={handlePopupControlAction}
        />
      )}
      { isEditAvatarPopupOpen && (
        <Popup
          contentsConfig={popupMap.form.changePhoto}
          formsMap={popupMap.form}
          handlePopupControlAction={handlePopupControlAction}
        />
      )}
      { isAddCardPopupOpen && (
        <Popup
          contentsConfig={popupMap.form.newPlace}
          formsMap={popupMap.form}
          handlePopupControlAction={handlePopupControlAction}
        />
      )}
      { selectedCard && (
        <Popup
          contentsConfig={popupMap.imageZoom}
          card={{ selectedCard, setSelectedCard }}
          handlePopupControlAction={handlePopupControlAction}
        />
      )}

    </div>
  );
}

export default App;
