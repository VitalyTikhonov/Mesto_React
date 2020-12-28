export const popupMap = {
  form: {
    signup: {
      name: 'signup',
      title: 'Регистрация',
      promptLinkLabel: 'войти',
      submitButtonLabel: 'Зарегистрироваться',
    },
    login: {
      name: 'login',
      title: 'Вход',
      promptLinkLabel: 'зарегистрироваться',
      submitButtonLabel: 'Войти',
    },
    editProfile: {
      name: 'editProfile',
      title: 'Редактировать профиль',
      submitButtonLabel: 'Сохранить',
    },
    changePhoto: {
      name: 'changePhoto',
      title: 'Сменить аватар',
      submitButtonLabel: 'Сохранить',
    },
    newPlace: {
      name: 'newPlace',
      title: 'Новое место',
      submitButtonLabel: 'Сохранить',
    },
    message: {
      name: 'message',
      submitButtonLabel: 'OK',
    },
  },
  imageZoom: {
    name: 'imageZoom',
  },
};

export const errorMessages = {
  empty: 'Это обязательное поле',
  // wronglength: 'Должно быть от 2 до 30 символов',
  tooLong(constraint) {
    const {
      lastTwoDigitsNum,
      string,
      lastDigitNum,
    } = constraint;
    return lastDigitNum !== 1 || lastTwoDigitsNum === 11
      ? `Должно быть не более ${string} символов`
      : `Должно быть не более ${string} символа`;
  },
  tooShort(constraint) {
    const {
      lastTwoDigitsNum,
      string,
      lastDigitNum,
    } = constraint;
    return lastDigitNum !== 1 || lastTwoDigitsNum === 11
      ? `Должно быть не менее ${string} символов`
      : `Должно быть не менее ${string} символа`;
  },
  wrongType: 'Введите действительный адрес',
};
