import { memo, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const UserProfile = memo(function UserProfile(props) {
  const {
    setIsEditAvatarPopupOpen,
    setIsEditProfilePopupOpen,
    setIsAddCardPopupOpen,
    form: { editProfile, changePhoto, newPlace },
  } = props;

  const {
    userDescription,
    avatar,
    // email,
    userName,
    // _id,
  } = useContext(CurrentUserContext);

  function handleAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  return (
    <section className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo" id={changePhoto.name + 'OpenElem'} onClick={handleAvatarClick} style={{ backgroundImage: `url(${avatar})` }} />
        <div className="user-info__data">
          <h1 className="user-info__name">{userName}</h1>
          <p className="user-info__about">{userDescription}</p>
          <button className="button button__square_black-outline-white user-info__button-edit-profile" id={editProfile.name + 'OpenElem'} onClick={handleEditProfileClick}>Редактировать</button>
        </div>
        <button className="button button__square_black-outline-white user-info__button" id={newPlace.name + 'OpenElem'} onClick={handleAddCardClick}>+</button>
      </div>
    </section>
  );
});

export default UserProfile;
