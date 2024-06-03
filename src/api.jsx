export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function VALIDATE_TOKEN_POST(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function GET_USER(token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function CREATE_USER(body) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_PHOTOS({ page, itemsQuantity, user }) {
  return {
    url:
      API_URL +
      `/api/photo/?_page=${page}&_total=${itemsQuantity}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function GET_PHOTO(photoId) {
  return {
    url: API_URL + `/api/photo/${photoId}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function POST_PHOTO(formData, token) {
  return {
    url: API_URL + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    },
  };
}

export function POST_COMMENT(id, body, token) {
  return {
    url: API_URL + `/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
