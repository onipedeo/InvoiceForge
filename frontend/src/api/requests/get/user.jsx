import helpers from "../helpers";
const { get } = helpers;
class UserData {
  constructor(id) {
    this.id = id;
  }

  get appointments() {
    return get(`/api/user/${this.id}/appointments`);
  }
  get allData() {
    return get(`/api/user/${this.id}`);
  }
  get clients() {
    return get(`/api/user/${this.id}/clients`);
  }

  get unreviewed() {
    return get(`/api/user/${this.id}/unreviewed`);
  }

  get invoices() {
    return get(`/api/user/${this.id}/invoices`);
  }

};



export default function(id) {
  return new UserData(id);
}
