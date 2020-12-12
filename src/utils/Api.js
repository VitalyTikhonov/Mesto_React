import { API_URL } from '../configs/config';

class Api {
  constructor() {
    this.baseUrl = API_URL;
    this.authorization = '0b72fd76-9a90-456a-b6c4-44b360b3c5bd'; // headers
    this.content_type = 'application/json'; // headers
  }

  primaryResponseHandler(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  getUserInfo() {
    return fetch(
      `${this.baseUrl}/users/me`,
      {
        method: 'GET',
        headers: { 'Content-Type': this.content_type },
        // headers: {
        //     authorization: this.authorization,
        // },
        credentials: 'include',
      }
    )
      .then(res => this.primaryResponseHandler(res));
  }

  saveProfile(name, about) {
    return fetch(
      `${this.baseUrl}/users/me`,
      {
        method: 'PATCH',
        headers: {
          // authorization: this.authorization,
          'Content-Type': this.content_type,
        },
        credentials: 'include',
        body: JSON.stringify({
          name,
          about,
        })
      }
    )
      .then(res => this.primaryResponseHandler(res));
  }

  changePhoto(avatar) {
    return fetch(
      `${this.baseUrl}/users/me/avatar`,
      {
        method: 'PATCH',
        headers: {
          // authorization: this.authorization,
          'Content-Type': this.content_type,
        },
        credentials: 'include',
        body: JSON.stringify({
          avatar,
        })
      }
    )
      .then(res => this.primaryResponseHandler(res));
  }

  getCards() {
    return fetch(
      `${this.baseUrl}/cards`,
      {
        method: 'GET',
        headers: {
          // authorization: this.authorization,
          'Content-Type': this.content_type,
        },
        credentials: 'include',
      }
    )
      .then(res => this.primaryResponseHandler(res));
  }

  addCard(name, link) {
    return fetch(
      `${this.baseUrl}/cards`,
      {
        method: 'POST',
        headers: {
          // authorization: this.authorization,
          'Content-Type': this.content_type,
        },
        credentials: 'include',
        body: JSON.stringify({
          name,
          link,
        })
      }
    )
      .then(res => this.primaryResponseHandler(res));
  }

  deleteCard(id) {
    return fetch(
      `${this.baseUrl}/cards/${id}`,
      {
        method: 'DELETE',
        headers: {
          // authorization: this.authorization,
          'Content-Type': this.content_type,
        },
        credentials: 'include',
      }
    )
      .then(res => this.primaryResponseHandler(res));
  }

  toggleCardLike(id, liking) {
    return fetch(
      `${this.baseUrl}/cards/${id}/likes`,
      {
        method: liking ? 'PUT' : 'DELETE',
        headers: {
          // authorization: this.authorization,
          'Content-Type': this.content_type,
        },
        credentials: 'include',
      }
    )
      .then(res => this.primaryResponseHandler(res));
  }
}

const api = new Api();

export default api;
