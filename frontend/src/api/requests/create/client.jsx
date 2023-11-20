import create from '../helpers/create';

export default (clientData) => {
  return create('/api/client', clientData);
};
