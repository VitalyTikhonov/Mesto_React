import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const {
    cardData,
    cardData: { _id, name, link, owner, likes },
    handlePopupControlAction,
    popupName,
    onCardLike,
    onCardDelete,
  } = props;

  const isOwn = owner === currentUser._id;
  const isLiked = likes.some((_id) => _id === currentUser._id);

  function handleImageClick() {
    const eventImitation = {
      target: {
        id: popupName + 'OpenElem',
        imageUrl: link,
      },
    }
    handlePopupControlAction(eventImitation);
  }

  function handleLikeClick() {
    onCardLike(cardData, !isLiked);
  }

  function handleDeleteClick(event) {
    event.stopPropagation();
    if (window.confirm("Удалить карточку?")) {
      onCardDelete(_id);
    }
  }

  return (
    <div className="place-card">
      <div
        className="place-card__image"
        style={{ backgroundImage: `url(${link})` }}
        onClick={handleImageClick}
      >
        <button
          className="place-card__delete-icon"
          onClick={handleDeleteClick}
          disabled={!isOwn} />
      </div>
      <div className="place-card__description">
        <h3 className="place-card__name">{name}</h3>
        <div className="like">
          <button
            className={`like__icon ${isLiked ? 'like__icon_liked' : ""}`}
            onClick={handleLikeClick}
          />
          <span className="like__count">{likes.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Card;


// createdAt: "2020-08-23T13:40:40.294Z"
// likes: Array(0)
// length: 0
// __proto__: Array(0)
// link: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvaJJHCJOhAuTLgjXASmMO-L58wbQMMXyNkw&usqp=CAU"
// name: "На селе 45+"
// owner: "5f4271b869f66ac6e5ea7997"
// __v: 0
// _id: "5f4271d869f66ac6e5ea7998"