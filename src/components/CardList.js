import { memo, useState, useEffect, useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const CardList = memo(function CardList(props) {
  const {
    cards,
    setSelectedCard,
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
          key={`${index}_${cardData._id}`}
          cardData={cardData}
          setSelectedCard={setSelectedCard}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />;
      }
      )}
    </section>
  )
});

export default CardList;
