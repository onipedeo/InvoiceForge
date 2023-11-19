
export const put = async (url, Dto) => {
  const requestOptions = {
    method: "PUT", // Change the method to "PUT"
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Dto),
  };

  return await fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      data = (
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
