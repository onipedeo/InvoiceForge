/**
 *
 * @param {string} url
 * @returns promise with data
 */
export const get = (url) => {
  return fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
};
