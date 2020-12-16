import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfileForm from './EditProfileForm';
import ChangePhotoForm from './ChangePhotoForm';
import NewPlaceForm from './NewPlaceForm';

function PopupForm(props) {
  const {
    formsMap,
    contentsConfig,
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

  return (
    <div className="popup__content popup__content_type_form">
      <h3 className="popup__title">{title}</h3>
      {popupName === formsMap.editProfile.name &&
        <EditProfileForm
          values={editProfileValues}
          updateValuesInState={setEditProfileValues}
          updateData={updateData}
          contentsConfig={contentsConfig}
        />}
      {popupName === formsMap.changePhoto.name &&
        <ChangePhotoForm
          values={changePhotoValues}
          updateValuesInState={setChangePhotoValues}
          updateData={updateData}
          contentsConfig={contentsConfig}
        />}
      {popupName === formsMap.newPlace.name &&
        <NewPlaceForm
          values={newPlaceValues}
          updateValuesInState={setNewPlaceValues}
          updateData={updateData}
          contentsConfig={contentsConfig}
        />}
    </div>
  )
}

export default PopupForm;
