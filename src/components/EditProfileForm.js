import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfileForm(props) {
  const {} = props;

  // const { about, avatar, name } = useContext(CurrentUserContext);

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
      <input type="text" name="userName" value={userName} id="user-name" className="popup__input" onChange={handleInputChange} placeholder="Имя" required minLength={2} maxLength={30} />
      <span className="popup__error" id="user-name-error" />
      <input type="text" name="userAbout" value={userAbout} id="user-about" className="popup__input" onChange={handleInputChange} placeholder="О себе" required minLength={2} maxLength={30} />
      <span className="popup__error" id="user-about-error" />
    </>
  )
}

export default EditProfileForm;
