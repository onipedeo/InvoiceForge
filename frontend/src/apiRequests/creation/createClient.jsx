import create from '../helpers/create';

export const createClient = (clientData) => {
  return create('/api/client', clientData);
};
