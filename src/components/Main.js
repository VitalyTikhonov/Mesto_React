import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from "../utils/Api";
import Card from './Card';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  const { popupMap, handlePopupControlAction } = props;
  const {
    form: { editProfile, changePhoto, newPlace },
    imageZoom,
  } = popupMap;

  const [cards, setCards] = useState([]);

  useEffect(function () {
    async function fetchCards() {
      const cards = await api.getCards();
      setCards(cards);
    }
    fetchCards();
  }, []);

  async function handleCardLike(card, likeOrUnlike) {
    try {
      const newCard = await api.toggleCardLike(card._id, likeOrUnlike);
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    } catch (err) {
      console.log(err);
    };
  }

  return (
    <main className="main">
      <section className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo" id={changePhoto.name + 'OpenElem'} onClick={handlePopupControlAction} style={{ backgroundImage: `url(${currentUser && currentUser.avatar})` }} />
          <div className="user-info__data">
            <h1 className="user-info__name">{currentUser && currentUser.name}</h1>
            <p className="user-info__about">{currentUser && currentUser.about}</p>
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
          />;
        }
        )}
      </section>
    </main >
  )
}

export default Main;
