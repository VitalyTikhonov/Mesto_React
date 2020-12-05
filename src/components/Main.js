function Main(props) {
  const {
    formsMap: { editProfile, changePhoto, newPlace },
    handlePopupControlClick,
  } = props;
  return (
    <main className="main">
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo" id={changePhoto.name + 'Elem'} onClick={handlePopupControlClick} />
          <div className="user-info__data">
            <h1 className="user-info__name" />
            <p className="user-info__about" />
            <button className="button user-info__button-edit-profile" id={editProfile.name + 'Elem'} onClick={handlePopupControlClick}>Edit</button>
          </div>
          <button className="button user-info__button" id={newPlace.name + 'Elem'} onClick={handlePopupControlClick}>+</button>
        </div>
      </div>
      <div className="places-list root__section">
      </div>
    </main>
  )
}

export default Main;
