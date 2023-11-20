import destroy from '../helpers/destroy';

export default async (addressId) => {
  const url = `http://localhost:8080/api/addresses/${addressId}`;
  return await destroy(url).catch((error) => {
    throw new error("Error deleting address", error);
  });
};
