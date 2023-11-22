import get from "../helpers";
class UserData {
  constructor(id) {
    this.id = id;
  }

  appointments() {
    return get(`/api/user/${this.id}/appointments`);
  }
  object() {
    return get(`/api/user/${this.id}`);
  }
  clients() {
    return get(`/api/user/${this.id}/clients`);
  }
  
  unreviewed() {
    return get(`/api/user/${this.id}/unreviewed`);
  }
  invoices() {
    return get(`/api/user/${this.id}/invoiced`);
  }

};



export default function(id) {
  return new UserData(id);
}
