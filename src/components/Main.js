import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main(props) {
  const { popupMap, handlePopupControlAction, cards, handleCardLike, handleCardDelete } = props;
  const {
    userDescription,
    avatar,
    // email,
    userName,
    // _id,
  } = useContext(CurrentUserContext);

  const {
    form: { editProfile, changePhoto, newPlace },
    imageZoom,
  } = popupMap;

  return (
    <main className="main">
      <section className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo" id={changePhoto.name + 'OpenElem'} onClick={handlePopupControlAction} style={{ backgroundImage: `url(${avatar})` }} />
          <div className="user-info__data">
            <h1 className="user-info__name">{userName}</h1>
            <p className="user-info__about">{userDescription}</p>
            <button className="button user-info__button-edit-profile" id={editProfile.name + 'OpenElem'} onClick={handlePopupControlAction}>Редактировать</button>
          </div>
          <button className="button user-info__button" id={newPlace.name + 'OpenElem'} onClick={handlePopupControlAction}>+</button>
        </div>
      </section>
      <section className="places-list root__section">
        {cards && cards.map((cardData, index) => {
          return <Card
            key={`${index}_${cardData.id}`}
            cardData={cardData}
            handlePopupControlAction={handlePopupControlAction}
            popupName={imageZoom.name}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />;
        }
        )}
      </section>
    </main >
  )
}

export default Main;
