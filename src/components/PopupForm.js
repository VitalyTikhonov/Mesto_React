import { useState } from 'react';

function PopupForm(props) {
  const { formsMap, contentsConfig: { name, title } } = props;
  const [values, setValues] = useState({
    userName: '',
    userAbout: '',
    placeName: '',
    placeImagelink: '',
    avatar: '',
  });
  // const [values, setValues] = useState('');

  function handleInputChange(event) {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
    // console.log('values', values); // Почему этот консоль-лог выдает неактуальное состояние объекта?
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log('handleSubmit values', values);
  }

  return (
    <div className="popup__content popup__content_type_form">
      <h3 className="popup__title">{title}</h3>
      <form className="popup__form" name={name} onSubmit={handleSubmit} noValidate>
        {name === formsMap.editProfile.name &&
          (<>
            <input type="text" name="userName" value={values.userName} id="user-name" className="popup__input" onChange={handleInputChange} placeholder="Имя" required minLength={2} maxLength={30} />
            <span className="popup__error" id="user-name-error" />
            <input type="text" name="userAbout" value={values.userAbout} id="user-about" className="popup__input" onChange={handleInputChange} placeholder="О себе" required minLength={2} maxLength={30} />
            <span className="popup__error" id="user-about-error" />
          </>)}
        {name === formsMap.newPlace.name &&
          (<>
            <input type="text" name="placeName" value={values.placeName} id="place-name" className="popup__input" onChange={handleInputChange} placeholder="Название" required minLength={2} maxLength={30} />
            <span className="popup__error" id="place-name-error" />
            <input type="url" name="placeImagelink" value={values.placeImagelink} id="place-link" className="popup__input" onChange={handleInputChange} placeholder="Ссылка на картинку" required />
            <span className="popup__error" id="place-link-error" />
          </>)}
        {name === formsMap.changePhoto.name &&
          (<>
            <input type="url" name="avatar" value={values.avatar} id="avatar" className="popup__input" onChange={handleInputChange} placeholder="Ссылка на аватар" required />
            <span className="popup__error" id="avatar-error" />
          </>)}
        <button type="submit" className="button popup__button" >Сохранить</button> {/* disabled */}
      </form>
    </div>
  )
}

export default PopupForm;
