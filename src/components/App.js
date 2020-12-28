import { useState, useEffect } from 'react';
import api from "../utils/Api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { LoginStatusContext } from '../contexts/LoginStatusContext';
import Header from './Header';
import Main from './Main';
import Popup from './Popup';
// import Footer from './Footer';
import EditProfileInputSet from './EditProfileInputSet';
import ChangePhotoInputSet from './ChangePhotoInputSet';
import NewPlaceInputSet from './NewPlaceInputSet';
import SignupInputSet from './SignupInputSet';
import LoginInputSet from './LoginInputSet';
import { popupMap } from '../constants/constants';
// import '../utils/onetimeOperations';

function App() {
  const [loginStatus, setLoginStatus] = useState('unknown');
  const [apiResponseObtained, setApiResponseObtained] = useState(false);
  const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isMessagePopupOpen, setIsMessagePopupOpen] = useState(false);
  // const [popupMap] = useState(popupConfig);
  const [selectedCard, setSelectedCard] = useState(null);
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
  const [auxPopupText, setAuxPopupText] = useState('');

  async function processCaughtError(err) {
    setApiResponseObtained(true);
    const errResJson = await err.json();
    setAuxPopupText(errResJson.message);
    setIsMessagePopupOpen(!isMessagePopupOpen);
  }

  async function signup(userInputObj) {
    try {
      const serverResponse = await api.signup(userInputObj);
      // console.log('signup serverResponse\n', serverResponse);
      setSignupPopupOpen(false);
      // setLoggedIn(true);
      setLoginStatus('loggedIn');
      setCurrentUser(serverResponse);
      setSignupValues({
        userName: '',
        userDescription: '',
        avatar: '',
        email: '',
      });
    } catch (err) {
      processCaughtError(err);
      setLoginStatus('loggedOut');
    }
  }

  async function login(userInputObj) {
    try {
      const serverResponse = await api.login(userInputObj);
      // console.log('login serverResponse\n', serverResponse);
      setLoginPopupOpen(false);
      // setLoggedIn(true);
      setLoginStatus('loggedIn');
      setCurrentUser(serverResponse);
      setLoginValues({
        email: '',
        password: '',
      });
    } catch (err) {
      processCaughtError(err);
      setLoginStatus('loggedOut');
    }
  }

  async function logout() {
    try {
      await api.logout();
      // console.log('logout serverResponse\n', serverResponse);
      // setLoggedIn(false);
      setLoginStatus('loggedOut');
      setCurrentUser({
        userName: '',
        userDescription: '',
        avatar: '',
        email: '',
        _id: '',
      });
    } catch (err) {
      processCaughtError(err);
    }
  }

  async function updateUserData(userInputObj) {
    try {
      const serverResponse = await api.saveProfile(userInputObj);
      // console.log('updateUserData serverResponse\n', serverResponse);
      setCurrentUser(serverResponse);
      setIsEditProfilePopupOpen(false);
    } catch (err) {
      processCaughtError(err);
    }
  }

  async function updateUserAvatar(userInputObj) {
    try {
      const serverResponse = await api.changePhoto(userInputObj);
      setCurrentUser(serverResponse);
      setIsEditAvatarPopupOpen(false);
    } catch (err) {
      processCaughtError(err);
    }
  }

  async function saveNewPlaceData(userInputObj) {
    try {
      const serverResponse = await api.addCard(userInputObj);
      setCards([...cards, serverResponse]);
      setIsAddCardPopupOpen(false);
    } catch (err) {
      processCaughtError(err);
    }
  }

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
      case `${popupMap.form.message.name}OpenElem`:
        setIsMessagePopupOpen(!isMessagePopupOpen);
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

  useEffect(function () {
    // console.log('fetchUserData useEffect');
    async function fetchUserData() {
      try {
        const currentUserData = await api.getUserInfo();
        // setLoggedIn(true);
        setCurrentUser(currentUserData);
        setLoginStatus('loggedIn');
      } catch (err) {
        const errResJson = await err.json();
        console.log(errResJson);
        setLoginStatus('loggedOut');
      }
    }
    fetchUserData();
  }, [loginStatus]);

  useEffect(function () {
    // console.log('fetchCards useEffect');
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
  }, [loginStatus]);

  return (
    <LoginStatusContext.Provider value={loginStatus}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="root">
          <Header
            popupMap={popupMap}
            handlePopupControlAction={handlePopupControlAction}
            loginStatus={loginStatus}
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
              // auxPopup={popupMap.form.message}
              contentsConfig={popupMap.form.signup}
              InputSet={SignupInputSet}
              inputStateValues={signupValues}
              inputStateUpdater={setSignupValues}
              updateData={signup}
              // setAuxPopupText={setAuxPopupText}
              handlePopupControlAction={handlePopupControlAction}
              toggleAuthDialog={toggleAuthDialog}
              apiResponseObtained={apiResponseObtained}
              setApiResponseObtained={setApiResponseObtained}
            />
          )}
          {isLoginPopupOpen && (
            <Popup
              // auxPopup={popupMap.form.message}
              contentsConfig={popupMap.form.login}
              InputSet={LoginInputSet}
              inputStateValues={loginValues}
              inputStateUpdater={setLoginValues}
              updateData={login}
              // setAuxPopupText={setAuxPopupText}
              handlePopupControlAction={handlePopupControlAction}
              toggleAuthDialog={toggleAuthDialog}
              apiResponseObtained={apiResponseObtained}
              setApiResponseObtained={setApiResponseObtained}
            />
          )}
          {isEditProfilePopupOpen && (
            <Popup
              // auxPopup={popupMap.form.message}
              contentsConfig={popupMap.form.editProfile}
              InputSet={EditProfileInputSet}
              inputStateValues={editProfileValues}
              inputStateUpdater={setEditProfileValues}
              updateData={updateUserData}
              // setAuxPopupText={setAuxPopupText}
              handlePopupControlAction={handlePopupControlAction}
              apiResponseObtained={apiResponseObtained}
              setApiResponseObtained={setApiResponseObtained}
            />
          )}
          {isEditAvatarPopupOpen && (
            <Popup
              // auxPopup={popupMap.form.message}
              contentsConfig={popupMap.form.changePhoto}
              InputSet={ChangePhotoInputSet}
              inputStateValues={changePhotoValues}
              inputStateUpdater={setChangePhotoValues}
              handlePopupControlAction={handlePopupControlAction}
              updateData={updateUserAvatar}
              // setAuxPopupText={setAuxPopupText}
              apiResponseObtained={apiResponseObtained}
              setApiResponseObtained={setApiResponseObtained}
            />
          )}
          {isAddCardPopupOpen && (
            <Popup
              // auxPopup={popupMap.form.message}
              contentsConfig={popupMap.form.newPlace}
              InputSet={NewPlaceInputSet}
              inputStateValues={newPlaceValues}
              inputStateUpdater={setNewPlaceValues}
              handlePopupControlAction={handlePopupControlAction}
              updateData={saveNewPlaceData}
              // setAuxPopupText={setAuxPopupText}
              apiResponseObtained={apiResponseObtained}
              setApiResponseObtained={setApiResponseObtained}
            />
          )}
          {isMessagePopupOpen && (
            <Popup
              // auxPopup={popupMap.form.message}
              auxPopupText={auxPopupText}
              contentsConfig={popupMap.form.message}
              handlePopupControlAction={handlePopupControlAction}
              setPopupOpenVariable={setIsMessagePopupOpen}
              apiResponseObtained={apiResponseObtained}
              setApiResponseObtained={setApiResponseObtained}
            />
          )}
          {selectedCard && (
            <Popup
              contentsConfig={popupMap.imageZoom}
              card={selectedCard}
              handlePopupControlAction={handlePopupControlAction}
              auxPopup={popupMap.form.message}
              auxPopupText={auxPopupText}
            />
          )}

        </div>
      </CurrentUserContext.Provider>
    </LoginStatusContext.Provider>
  );
}

export default App;
