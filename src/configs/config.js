const PORT = 3000;
const DOMAIN = process.env.NODE_ENV === 'development'
  ? `http://localhost:${PORT}`
  : 'https://api.vitaliytikhonov.ru';
const SUBPATH = process.env.NODE_ENV === 'development'
  ? ''
  : '/webdev/projects/mesto';
const API_URL = `${DOMAIN}${SUBPATH}`;

export {
  API_URL,
};
