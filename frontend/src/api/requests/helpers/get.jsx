
/**
 * Makes a GET request to the specified URL with the provided body.
 * @param {string} url - The URL to make the GET request to.
 * @param {object} body - The body of the request (optional).
 * @returns {Promise} - A promise that resolves to the response JSON or rejects with an error.
 */
export default (url, body) => {

  const options =  {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }

  return fetch(url, (options))
    .then(response => response.json())
    .catch(err => console.log(err));
};
