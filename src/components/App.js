import { useState, useEffect } from 'react';
import api from "../utils/Api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Popup from './Popup';
// import Footer from './Footer';
import { popupConfig } from '../configs/constants';
// import '../utils/onetimeOperations';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [popupMap] = useState(popupConfig);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    userDescription: '',
    avatar: '',
    email: '',
    userName: '',
    _id: '',
  });
  const [cards, setCards] = useState([]);

  async function updateUserData(userInputObj) {
    try {
      const serverResponse = await api.saveProfile(userInputObj);
      setCurrentUser(serverResponse);
      setIsEditProfilePopupOpen(false);
    } catch (err) {
      const errResJson = await err.json();
      console.log('errResJson', errResJson);
    }
  }

  async function updateUserAvatar(userInputObj) {
    try {
      const serverResponse = await api.changePhoto(userInputObj);
      setCurrentUser(serverResponse);
      setIsEditAvatarPopupOpen(false);
    } catch (err) {
      const errResJson = await err.json();
      console.log('errResJson', errResJson);
    }
  }

  async function saveNewPlaceData(userInputObj) {
    try {
      const serverResponse = await api.addCard(userInputObj);
      setCards([...cards, serverResponse]);
      setIsAddCardPopupOpen(false);
    } catch (err) {
      const errResJson = await err.json();
      console.log('errResJson', errResJson);
    }
  }

  useEffect(function () {
    async function fetchUserData() {
      const currentUserData = await api.getUserInfo();
      setCurrentUser(currentUserData);
    }
    fetchUserData();
  }, []);

  useEffect(function () {
    async function fetchCards() {
      const cards = await api.getCards();
      setCards(cards);
    }
    fetchCards();
  }, []);

  async function handleCardLike(card, likeOrUnlike) {
    try {
      const newCard = await api.toggleCardLike(card._id, likeOrUnlike);
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    } catch (err) {
      console.log(err);
    };
  }

  async function handleCardDelete(cardId) {
    try {
      const deletedCard = await api.deleteCard(cardId);
      const newCards = cards.filter((c) => c._id !== deletedCard._id);
      setCards(newCards);
    } catch (err) {
      console.log(err);
    };
  }

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
          cards={cards}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
        />

        {isEditProfilePopupOpen && (
          <Popup
            contentsConfig={popupMap.form.editProfile}
            formsMap={popupMap.form}
            handlePopupControlAction={handlePopupControlAction}
            updateData={{ updateUserData }}
          />
        )}
        {isEditAvatarPopupOpen && (
          <Popup
            contentsConfig={popupMap.form.changePhoto}
            formsMap={popupMap.form}
            handlePopupControlAction={handlePopupControlAction}
            updateData={{ updateUserAvatar }}
          />
        )}
        {isAddCardPopupOpen && (
          <Popup
            contentsConfig={popupMap.form.newPlace}
            formsMap={popupMap.form}
            handlePopupControlAction={handlePopupControlAction}
            updateData={{ saveNewPlaceData }}
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
