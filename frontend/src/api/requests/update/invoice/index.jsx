import setPaid from './setPaid';

export default (id, formData) => {
  if (formData.paid) {
    return setPaid(id, formData.paid);
  }
  throw new Error("No update method for whole invoice, only for paid status");

};