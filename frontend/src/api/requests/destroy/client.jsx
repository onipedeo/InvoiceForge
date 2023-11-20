import destroy from "../helpers/destroy";

export default async (clientId) => {
  const url = `http://localhost:8080/api/clients/${clientId}`;
  return await destroy(url).catch((error) => {
    throw new error("Error deleting client");
  });
}
