function Main(props) {
  const { handleEditProfileClick, handleNewPlaceClick, handleEditAvatarClick } = props;
  return (
    <main className="main">
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo" onClick={handleEditAvatarClick}/>
          <div className="user-info__data">
            <h1 className="user-info__name" />
            <p className="user-info__about" />
            <button className="button user-info__button-edit-profile" onClick={handleEditProfileClick}>Edit</button>
          </div>
          <button className="button user-info__button" onClick={handleNewPlaceClick}>+</button>
        </div>
      </div>
      <div className="places-list root__section">
      </div>
    </main>
  )
}

export default Main;
