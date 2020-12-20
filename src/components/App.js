import { useState, useEffect } from 'react';
import api from "../utils/Api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Popup from './Popup';
// import Footer from './Footer';
import EditProfileInputSet from './EditProfileInputSet';
import ChangePhotoInputSet from './ChangePhotoInputSet';
import NewPlaceInputSet from './NewPlaceInputSet';
import SignupInputSet from './SignupInputSet';
import LoginInputSet from './LoginInputSet';
import { popupConfig } from '../configs/constants';
// import '../utils/onetimeOperations';

function App() {
  const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [popupMap] = useState(popupConfig);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    userName: '',
    userDescription: '',
    avatar: '',
    email: '',
    _id: '',
  });
  const [cards, setCards] = useState([]);

  const [signupValues, setSignupValues] = useState({
    userName: '',
    userDescription: '',
    avatar: '',
    password: '',
    email: '',
  });
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });
  const [editProfileValues, setEditProfileValues] = useState({
    userName: '',
    userDescription: '',
  });
  const [changePhotoValues, setChangePhotoValues] = useState({
    avatar: '',
  });
  const [newPlaceValues, setNewPlaceValues] = useState({
    placeName: '',
    placeImagelink: '',
  });

  async function signup(userInputObj) {
    try {
      const serverResponse = await api.signup(userInputObj);
      // console.log('signup serverResponse\n', serverResponse);
      setSignupPopupOpen(false);
      setLoggedIn(true);
      setCurrentUser(serverResponse);
      setSignupValues({
        userName: '',
        userDescription: '',
        avatar: '',
        email: '',
      });
    } catch (err) {
      const errResJson = await err.json();
      console.log(errResJson);
    }
  }

  async function login(userInputObj) {
    try {
      const serverResponse = await api.login(userInputObj);
      // console.log('login serverResponse\n', serverResponse);
      setLoginPopupOpen(false);
      setLoggedIn(true);
      setCurrentUser(serverResponse);
      setLoginValues({
        email: '',
        password: '',
      });
    } catch (err) {
      const errResJson = await err.json();
      console.log(errResJson);
      // console.log(err);
    }
  }

  async function logout() {
    try {
      await api.logout();
      // console.log('logout serverResponse\n', serverResponse);
      setLoggedIn(false);
      setCurrentUser({
        userName: '',
        userDescription: '',
        avatar: '',
        email: '',
        _id: '',
      });
    } catch (err) {
      const errResJson = await err.json();
      console.log(errResJson);
      // console.log(err);
    }
  }

  async function updateUserData(userInputObj) {
    try {
      const serverResponse = await api.saveProfile(userInputObj);
      // console.log('updateUserData serverResponse\n', serverResponse);
      setCurrentUser(serverResponse);
      setIsEditProfilePopupOpen(false);
    } catch (err) {
      const errResJson = await err.json();
      console.log(errResJson);
    }
  }

  async function updateUserAvatar(userInputObj) {
    try {
      const serverResponse = await api.changePhoto(userInputObj);
      setCurrentUser(serverResponse);
      setIsEditAvatarPopupOpen(false);
    } catch (err) {
      const errResJson = await err.json();
      console.log(errResJson);
    }
  }

  async function saveNewPlaceData(userInputObj) {
    try {
      const serverResponse = await api.addCard(userInputObj);
      setCards([...cards, serverResponse]);
      setIsAddCardPopupOpen(false);
    } catch (err) {
      const errResJson = await err.json();
      console.log(errResJson);
    }
  }

  useEffect(function () {
    async function fetchUserData() {
      try {
        const currentUserData = await api.getUserInfo();
        setLoggedIn(true);
        setCurrentUser(currentUserData);
      } catch (err) {
        const errResJson = await err.json();
        console.log(errResJson);
      }
    }
    fetchUserData();
  }, []);

  useEffect(function () {
    async function fetchCards() {
      try {
        const cards = await api.getCards();
        setCards(cards);
      } catch (err) {
        const errResJson = await err.json();
        console.log(errResJson);
      }
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

  function toggleAuthDialog() {
    setSignupPopupOpen(!isSignupPopupOpen);
    setLoginPopupOpen(!isLoginPopupOpen);
  }

  /* просто прокидывать сами стейт-сеттеры? */
  function handlePopupControlAction(event) {
    switch (event.target.id) {
      case `${popupMap.form.signup.name}OpenElem`:
        setSignupPopupOpen(!isSignupPopupOpen);
        break;
      case `${popupMap.form.login.name}OpenElem`:
        setLoginPopupOpen(!isLoginPopupOpen);
        break;
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
        <Header
          popupMap={popupMap}
          handlePopupControlAction={handlePopupControlAction}
          authStatus={{loggedIn}}
          logout={logout}
        />

        <Main
          popupMap={popupMap}
          handlePopupControlAction={handlePopupControlAction}
          cards={cards}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
        />

        {isSignupPopupOpen && (
          <Popup
            contentsConfig={popupMap.form.signup}
            InputSet={SignupInputSet}
            inputState={{
              values: signupValues,
              updater: setSignupValues,
            }}
            handlePopupControlAction={handlePopupControlAction}
            updateData={signup}
            toggleAuthDialog={toggleAuthDialog}
          />
        )}
        {isLoginPopupOpen && (
          <Popup
            contentsConfig={popupMap.form.login}
            InputSet={LoginInputSet}
            inputState={{
              values: loginValues,
              updater: setLoginValues,
            }}
            handlePopupControlAction={handlePopupControlAction}
            updateData={login}
            toggleAuthDialog={toggleAuthDialog}
          />
        )}
        {isEditProfilePopupOpen && (
          <Popup
            contentsConfig={popupMap.form.editProfile}
            InputSet={EditProfileInputSet}
            inputState={{
              values: editProfileValues,
              updater: setEditProfileValues,
            }}
            handlePopupControlAction={handlePopupControlAction}
            updateData={updateUserData}
          />
        )}
        {isEditAvatarPopupOpen && (
          <Popup
            contentsConfig={popupMap.form.changePhoto}
            InputSet={ChangePhotoInputSet}
            inputState={{
              values: changePhotoValues,
              updater: setChangePhotoValues,
            }}
            handlePopupControlAction={handlePopupControlAction}
            updateData={updateUserAvatar}
          />
        )}
        {isAddCardPopupOpen && (
          <Popup
            contentsConfig={popupMap.form.newPlace}
            InputSet={NewPlaceInputSet}
            inputState={{
              values: newPlaceValues,
              updater: setNewPlaceValues,
            }}
            handlePopupControlAction={handlePopupControlAction}
            updateData={saveNewPlaceData}
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
