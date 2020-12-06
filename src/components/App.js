import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Popup from './Popup';
// import Footer from './Footer';
import { formsMapCongig } from '../configs/constants';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  // const [currentPopup, setCurrentPopup] = useState();
  const [formsMap] = useState(formsMapCongig);

  function handlePopupControlClick(event) {
    // if (event.target.id) {
    // setCurrentPopup(event.target.id);
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
    // }} else {
    //   currentPopup
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
        <Popup
          formConfig={formsMap.editProfile}
          formsMap={formsMap}
          handlePopupControlClick={handlePopupControlClick}
        />
      )}
      { isEditAvatarPopupOpen && (
        <Popup
          formConfig={formsMap.changePhoto}
          formsMap={formsMap}
          handlePopupControlClick={handlePopupControlClick}
        />
      )}
      { isAddCardPopupOpen && (
        <Popup
          formConfig={formsMap.newPlace}
          formsMap={formsMap}
          handlePopupControlClick={handlePopupControlClick}
        />
      )}

    </div>
  );
}

export default App;
