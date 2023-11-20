import create from '../helpers/create';

export const client = (clientData) => {
  return create('/api/client', clientData);
};
