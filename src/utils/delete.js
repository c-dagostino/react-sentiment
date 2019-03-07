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

export default function deleteRequest(url) {
  return fetch(url, {
    method: 'DELETE',
    credentials: 'same-origin'
  }).then(checkStatus);
}
