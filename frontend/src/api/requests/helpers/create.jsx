
/**
 * Sends a POST request to the specified URL with the provided data.
 * @param {string} url - The URL to send the request to.
 * @param {object} Dto - The data to be sent in the request body.
 * @returns {Promise<object>} - A promise that resolves to the response data.
 * @throws {Error} - If there is an error during the request.
 */
export default (url, Dto) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Dto),
  };


  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      console.log(data);
      return data;
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
      throw error;
    });
};
