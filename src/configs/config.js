const PORT = 3000;

const connectToYandex = false;
const YANDEX_API_URL = 'http://nomoreparties.co/cohort11';
const YANDEX_TOKEN = connectToYandex
  ? '0b72fd76-9a90-456a-b6c4-44b360b3c5bd'
  : null;
const REMOTE_API_URL = connectToYandex
  ? YANDEX_API_URL
  : `http://localhost:${PORT}`;

const DOMAIN = process.env.NODE_ENV === 'development'
  ? REMOTE_API_URL
  : 'https://api.vitaliytikhonov.ru';
const SUBPATH = process.env.NODE_ENV === 'development'
  ? ''
  : '/webdev/projects/mesto';
const API_URL = `${DOMAIN}${SUBPATH}`;

export {
  API_URL,
  YANDEX_TOKEN,
  connectToYandex,
};
