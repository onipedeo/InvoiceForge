import helpers from "../helpers";
const { get } = helpers;
class clientRequests {
  constructor(id) {
    this.id = id;
  }

  get appointments() {
    return get(`/api/client/${this.id}/appointments`);
  }
  get allData() {
    return get(`/api/client/${this.id}`);
  }

  get unreviewed() {
    return get(`/api/client/${this.id}/unreviewed`);
  }

  get reviewed() {
    return get(`/api/client/${this.id}/reviewed`);
  }

  get invoices() {
    return get(`/api/client/${this.id}/invoices`);
  }

};



export default function(id) {
  return new clientRequests(id);
}
