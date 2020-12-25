import { useState, useEffect, useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function CardList(props) {
  const {
    imageZoom,
    cards,
    handlePopupControlAction,
    handleCardLike,
    handleCardDelete,
    onesOwnCardsOnly,
  } = props;
  const currentUser = useContext(CurrentUserContext);
  const [cardsToRender, setCardsToRender] = useState([]);

  useEffect(function () {
    if (!onesOwnCardsOnly) {
      setCardsToRender(cards);
    } else {
      const ownCards = cards.filter((c) => c.owner === currentUser._id);
      setCardsToRender(ownCards);
    }
  }, [onesOwnCardsOnly, cards, currentUser._id]);

  return (
    <section className="places-list root__section">
      {cardsToRender && cardsToRender.map((cardData, index) => {
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
  )
}

export default CardList;
