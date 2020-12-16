import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfileForm from './EditProfileForm';
import ChangePhotoForm from './ChangePhotoForm';
import NewPlaceForm from './NewPlaceForm';

function PopupForm(props) {
  const {
    formsMap,
    contentsConfig: { name: popupName, title },
    updateData,
  } = props; // popupName введено вместо name для исключения конфликта с CurrentUserContext

  const { userDescription, avatar, userName } = useContext(CurrentUserContext);

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

  useEffect(() => {
    setEditProfileValues({
      userName,
      userDescription,
    });
    setChangePhotoValues({ avatar });
  }, [userName, userDescription, avatar]);

  function handleSubmit(event) {
    event.preventDefault();
    const { name } = event.target;

    switch (name) {
      case formsMap.editProfile.name:
        updateData(editProfileValues);
        break;
      case formsMap.changePhoto.name:
        updateData(changePhotoValues);
        break;
      case formsMap.newPlace.name:
        updateData(newPlaceValues);
        break;
      default:
    }
  }

  return (
    <div className="popup__content popup__content_type_form">
      <h3 className="popup__title">{title}</h3>
      <form className="popup__form" name={popupName} onSubmit={handleSubmit} noValidate>
        {popupName === formsMap.editProfile.name &&
          <EditProfileForm values={editProfileValues} updateValuesInState={setEditProfileValues} />}
        {popupName === formsMap.changePhoto.name &&
          <ChangePhotoForm values={changePhotoValues} updateValuesInState={setChangePhotoValues} />}
        {popupName === formsMap.newPlace.name &&
          <NewPlaceForm values={newPlaceValues} updateValuesInState={setNewPlaceValues} />}
        <button type="submit" className="button popup__button" >Сохранить</button> {/* disabled */}
      </form>
    </div>
  )
}

export default PopupForm;
