
/**
 * Sends a DELETE request to the specified URL with the provided data.
 *
 * @param {string} url - The URL to send the DELETE request to.
 * @param {object} Dto - The data to be sent in the request body.
 * @returns {Promise<object>} - A promise that resolves to the response data.
 * @throws {Error} - If there is an error during the request.
 */
export default (url) => {
  //configure the request options
  const requestOptions = {
    method: "PUT", // Change the method to "PUT"
  };

  return fetch(url, requestOptions)
    .then((response) => true)
    .catch((error) => {
      // Handle any errors
      console.error(error);
      console.log("Error deleting data");
      throw new Error("Error deleting data");
    });
};
