
/**
 * Sends a PUT request to the specified URL with the provided data.
 *
 * @param {string} url - The URL to send the PUT request to.
 * @param {object} Dto - The data to be sent in the request body.
 * @returns {Promise<object>} - A Promise that resolves to the response data as an object.
 * @throws {Error} - If there is an error during the request or response handling.
 */
export default (url, Dto) => {
  const requestOptions = {
    method: "PUT", // Change the method to "PUT"
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Dto),
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      // Handle any errors
      console.error(error);
      throw error;
    });
};


