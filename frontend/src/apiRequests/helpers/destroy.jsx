
export default destroy = async (url, Dto) => {
  //configure the request options
  const requestOptions = {
    method: "DELETE", // Change the method to "PUT"
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Dto),
  };

  return await fetch(url, requestOptions)
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
