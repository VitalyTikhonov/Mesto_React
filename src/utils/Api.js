import {
  API_URL,
  // YANDEX_TOKEN,
} from '../configs/config';

class Api {
  constructor() {
    this.baseUrl = API_URL;
    // this.authorization = YANDEX_TOKEN; // headers
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
        // headers: { 'Content-Type': this.content_type },
        // headers: {
        //     authorization: this.authorization,
        // },
        credentials: 'include',
      }
    )
      .then(res => this.primaryResponseHandler(res));
  }

  saveProfile({ userName, userDescription }) {
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
          userName,
          userDescription,
        })
      }
    )
      .then(res => this.primaryResponseHandler(res));
  }

  changePhoto({ avatar }) {
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
        // headers: {
        //   // authorization: this.authorization,
        //   // 'Content-Type': this.content_type,
        // },
        credentials: 'include',
      }
    )
      .then(res => this.primaryResponseHandler(res));
  }

  addCard({ placeName, placeImagelink }) {
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
          name: placeName,
          link: placeImagelink,
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
        // headers: {
        //   // authorization: this.authorization,
        //   // 'Content-Type': this.content_type,
        // },
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
        // headers: {
        //   // authorization: this.authorization,
        //   // 'Content-Type': this.content_type,
        // },
        credentials: 'include',
      }
    )
      .then(res => this.primaryResponseHandler(res));
  }
}

const api = new Api();

export default api;
