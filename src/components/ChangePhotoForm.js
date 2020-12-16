import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function ChangePhotoForm(props) {
  const {
    formsMap,
    contentsConfig: { name: popupName, title },
    updateData: { updateUserData, updateUserAvatar, saveNewPlaceData },
  } = props; // popupName введено вместо name для исключения конфликта с CurrentUserContext

  const { about, avatar, name } = useContext(CurrentUserContext);

  const [userName, setUserName] = useState('');
  const [userAbout, setUserAbout] = useState('');
  const [userAvatar, setAvatar] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [placeImagelink, setPlaceImagelink] = useState('');

  useEffect(() => {
    setUserName(name);
    setUserAbout(about);
    setAvatar(avatar);
  }, [name, about, avatar]);

  function handleInputChange(event) {
    const { name, value } = event.target;

    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'userAbout':
        setUserAbout(value);
        break;
      case 'userAvatar':
        setAvatar(value);
        break;
      case 'placeName':
        setPlaceName(value);
        break;
      case 'placeImagelink':
        setPlaceImagelink(value);
        break;
      default:
    }
    // console.log(
    //   'editProfileValues', editProfileValues, '\n',
    //   'changePhotoValues', changePhotoValues, '\n',
    //   'newPlaceValues', newPlaceValues
    // ); // Почему этот консоль-лог выдает неактуальное состояние объекта?
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { name } = event.target;

    switch (name) {
      case formsMap.editProfile.name:
        updateUserData({ name: userName, about: userAbout });
        break;
      case formsMap.changePhoto.name:
        updateUserAvatar({ avatar: userAvatar });
        break;
      case formsMap.newPlace.name:
        saveNewPlaceData({ name: placeName, link: placeImagelink });
        break;
      default:
    }
  }

  return (
    <>
      <input type="url" name="userAvatar" value={userAvatar} id="avatar" className="popup__input" onChange={handleInputChange} placeholder="Ссылка на аватар" required />
      <span className="popup__error" id="avatar-error" />
    </>
  )
}

export default ChangePhotoForm;
