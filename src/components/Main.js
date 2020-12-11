import { useState, useEffect } from 'react';
import api from "../utils/Api";
import Card from './Card';

function Main(props) {
  const { popupMap, handlePopupControlAction } = props;
  const {
     form: { editProfile, changePhoto, newPlace },
     imageZoom,
  } = popupMap;

  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(function () {
    async function fetchUserData() {
      const { name, about, avatar } = await api.getUserInfo();
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    }
    fetchUserData();
  }, []);

  useEffect(function () {
    async function fetchCards() {
      const cards = await api.getCards();
      setCards(cards);
    }
    fetchCards();
  }, []);

  return (
    <main className="main">
      <section className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo" id={changePhoto.name + 'OpenElem'} onClick={handlePopupControlAction} style={{ backgroundImage: `url(${userAvatar})` }} />
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
          />;
        }
        )}
      </section>
    </main >
  )
}

export default Main;
