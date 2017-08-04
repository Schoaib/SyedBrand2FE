function post(url,query, cb) {
  return fetch(url, {
    method:'post',
    body: JSON.stringify(query),
     mode: 'cors',
     headers: { "Content-Type" : "application/json" }
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function get(url,cb) {
  return fetch(url,{
     mode: 'cors'
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { post ,get};
export default Client;
