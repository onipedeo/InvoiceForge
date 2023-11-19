/**
 *
 * @param {string} url
 * @returns promise with data
 */
export const get = (url, body) => {

  const options =  {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body) || {},
  }

return fetch(url, (options))
  .then(response => response.json())
  .catch(err => console.log(err));
};
