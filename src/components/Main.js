function Main(props) {
  return (
    <main className="main">
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo" />
          <div className="user-info__data">
            <h1 className="user-info__name" />
            <p className="user-info__about" />
            <button className="button user-info__button-edit-profile" onClick={props.handleEditProfileClick}>Edit</button>
          </div>
          <button className="button user-info__button" onClick={props.handleNewPlaceClick}>+</button>
        </div>
      </div>
      <div className="places-list root__section">
      </div>
    </main>
  )
}

export default Main;
