import { Switch } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import UserProfile from './UserProfile';
import Card from './Card';

function Main(props) {
  const {
    loggedIn,
    popupMap: { form, imageZoom },
    handlePopupControlAction,
    cards,
    handleCardLike,
    handleCardDelete,
  } = props;
  // console.log('Main loggedIn', loggedIn);

  return (
    <main className="main">
      <Switch>
        <ProtectedRoute
          path="/user-profile"
          loggedIn={loggedIn}
          component={UserProfile}
          form={form}
          handlePopupControlAction={handlePopupControlAction}
        />
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
