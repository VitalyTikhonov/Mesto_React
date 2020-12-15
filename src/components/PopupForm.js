import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function PopupForm(props) {
  const { formsMap, contentsConfig: { name: popupName, title }, updateUserData } = props; // popupName введено вместо name для исключения конфликта с CurrentUserContext
  const { about, avatar, name } = useContext(CurrentUserContext);
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

  function handleInputChange(event) {
    const { name, value } = event.target;

    switch (popupName) {
      case formsMap.editProfile.name:
        setEditProfileValues({
          ...editProfileValues,
          [name]: value,
        });
        break;
      case formsMap.changePhoto.name:
        setChangePhotoValues({
          ...changePhotoValues,
          [name]: value,
        });
        break;
      case formsMap.newPlace.name:
        setNewPlaceValues({
          ...newPlaceValues,
          [name]: value,
        });
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
    // console.log('handleSubmit values', values);
    // updateUserData();
  }

  return (
    <div className="popup__content popup__content_type_form">
      <h3 className="popup__title">{title}</h3>
      <form className="popup__form" name={popupName} onSubmit={handleSubmit} noValidate>
        {popupName === formsMap.editProfile.name &&
          (<>
            <input type="text" name="userName" value={editProfileValues.userName} id="user-name" className="popup__input" onChange={handleInputChange} placeholder="Имя" required minLength={2} maxLength={30} />
            <span className="popup__error" id="user-name-error" />
            <input type="text" name="userAbout" value={editProfileValues.userAbout} id="user-about" className="popup__input" onChange={handleInputChange} placeholder="О себе" required minLength={2} maxLength={30} />
            <span className="popup__error" id="user-about-error" />
          </>)}
        {popupName === formsMap.newPlace.name &&
          (<>
            <input type="text" name="placeName" value={newPlaceValues.placeName} id="place-name" className="popup__input" onChange={handleInputChange} placeholder="Название" required minLength={2} maxLength={30} />
            <span className="popup__error" id="place-name-error" />
            <input type="url" name="placeImagelink" value={newPlaceValues.placeImagelink} id="place-link" className="popup__input" onChange={handleInputChange} placeholder="Ссылка на картинку" required />
            <span className="popup__error" id="place-link-error" />
          </>)}
        {popupName === formsMap.changePhoto.name &&
          (<>
            <input type="url" name="avatar" value={changePhotoValues.avatar} id="avatar" className="popup__input" onChange={handleInputChange} placeholder="Ссылка на аватар" required />
            <span className="popup__error" id="avatar-error" />
          </>)}
        <button type="submit" className="button popup__button" >Сохранить</button> {/* disabled */}
      </form>
    </div>
  )
}

export default PopupForm;
