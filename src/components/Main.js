import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import ProjectInfo from './ProjectInfo';
import UserProfile from './UserProfile';
import Card from './Card';

function Main(props) {
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
        </Route>

        <Route path="/user-profile">
          <ProtectedRoute
            component={UserProfile}
            form={form}
            handlePopupControlAction={handlePopupControlAction}
          />
        </Route>
      </Switch>
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
