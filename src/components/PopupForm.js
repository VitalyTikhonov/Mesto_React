import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfileForm from './EditProfileForm';
import ChangePhotoForm from './ChangePhotoForm';
import NewPlaceForm from './NewPlaceForm';

function PopupForm(props) {
  const {
    formsMap,
    contentsConfig: { name: popupName, title },
    updateData: { updateUserData, updateUserAvatar, saveNewPlaceData },
  } = props; // popupName введено вместо name для исключения конфликта с CurrentUserContext

  const { about, avatar, name } = useContext(CurrentUserContext);

  // const [userName, setUserName] = useState('');
  // const [userAbout, setUserAbout] = useState('');
  // const [userAvatar, setAvatar] = useState('');
  // const [placeName, setPlaceName] = useState('');
  // const [placeImagelink, setPlaceImagelink] = useState('');

  // useEffect(() => {
  //   setUserName(name);
  //   setUserAbout(about);
  //   setAvatar(avatar);
  // }, [name, about, avatar]);

  const [editProfileValues, setEditProfileValues] = useState({
    userName: '',
    userAbout: '',
  });
  const [changePhotoValues, setChangePhotoValues] = useState({
    avatar: '',
  });
  const [newPlaceValues, setNewPlaceValues] = useState({
    placeName: '',
    placeImagelink: '',
  });

  useEffect(() => {
    setEditProfileValues({
      userName: name,
      userAbout: about,
    });
    setChangePhotoValues({ avatar });
  }, [name, about, avatar]);

  // function handleInputChange(event) {
  //   const { name, value } = event.target;

  //   switch (name) {
  //     case 'userName':
  //       setUserName(value);
  //       break;
  //     case 'userAbout':
  //       setUserAbout(value);
  //       break;
  //     case 'userAvatar':
  //       setAvatar(value);
  //       break;
  //     case 'placeName':
  //       setPlaceName(value);
  //       break;
  //     case 'placeImagelink':
  //       setPlaceImagelink(value);
  //       break;
  //     default:
  //   }
  //   // console.log(
  //   //   'editProfileValues', editProfileValues, '\n',
  //   //   'changePhotoValues', changePhotoValues, '\n',
  //   //   'newPlaceValues', newPlaceValues
  //   // ); // Почему этот консоль-лог выдает неактуальное состояние объекта?
  // }

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
    <div className="popup__content popup__content_type_form">
      <h3 className="popup__title">{title}</h3>
      <form className="popup__form" name={popupName} onSubmit={handleSubmit} noValidate>
        {popupName === formsMap.editProfile.name &&
          <EditProfileForm values={editProfileValues} />}
        {popupName === formsMap.changePhoto.name &&
          <ChangePhotoForm values={changePhotoValues} />}
        {popupName === formsMap.newPlace.name &&
          <NewPlaceForm values={newPlaceValues} />}
        <button type="submit" className="button popup__button" >Сохранить</button> {/* disabled */}
      </form>
    </div>
  )
}

export default PopupForm;
