import { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import ProjectInfo from './ProjectInfo';
import UserProfile from './UserProfile';
import CardList from './CardList';

const Main = memo(function Main(props) {
  const {
    popupMap: { form, imageZoom },
    handlePopupControlAction,
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
            imageZoom={imageZoom}
            cards={cards}
            handlePopupControlAction={handlePopupControlAction}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
          />
        </Route>

        <Route path="/user-profile">
          <ProtectedRoute
            component={UserProfile}
            form={form}
            handlePopupControlAction={handlePopupControlAction}
          />
          <CardList
            imageZoom={imageZoom}
            cards={cards}
            handlePopupControlAction={handlePopupControlAction}
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
