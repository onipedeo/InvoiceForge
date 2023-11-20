
export default async (url, Dto) => {
  const requestOptions = {
    method: "PUT", // Change the method to "PUT"
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Dto),
  };

  return await fetch(url, requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      // Handle any errors
      console.error(error);
      throw error;
    });
};
