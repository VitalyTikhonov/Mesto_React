import { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import ProjectInfo from './ProjectInfo';
import UserProfile from './UserProfile';
import CardList from './CardList';

const Main = memo(function Main(props) {
  const {
    popupMap: { form },
    setIsEditAvatarPopupOpen,
    setIsEditProfilePopupOpen,
    setIsAddCardPopupOpen,
    setSelectedCard,
    cards,
    handleCardLike,
    handleCardDelete,
  } = props;

  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <ProjectInfo />
          <CardList
            cards={cards}
            setSelectedCard={setSelectedCard}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
          />
        </Route>

        <Route path="/user-profile">
          <ProtectedRoute
            component={UserProfile}
            form={form}
            setIsEditAvatarPopupOpen={setIsEditAvatarPopupOpen}
            setIsEditProfilePopupOpen={setIsEditProfilePopupOpen}
            setIsAddCardPopupOpen={setIsAddCardPopupOpen}
          />
          <CardList
            cards={cards}
            setSelectedCard={setSelectedCard}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
            onesOwnCardsOnly="true"
          />
        </Route>
      </Switch>
    </main >
  )
});

export default Main;
