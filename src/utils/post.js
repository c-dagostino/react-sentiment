import 'whatwg-fetch';

function parseError(data) {
  const error = new Error(data.message);
  throw error;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then(parseError);
}

function parseJSON(response) {
  return response.json();
}

export function postWithResponseBody(url, data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
    .then(checkStatus)
    .then(parseJSON);
}

export default function post(url, data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }).then(checkStatus);
}

export function postPlainText(url, data) {
  return fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }).then(checkStatus);
}
