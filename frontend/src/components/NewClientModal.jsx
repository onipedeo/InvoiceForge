import "../styles/new-client-modal.scss"

export default function NewClientModal(props) {
  return (
    <div className="modal" id="newClientModal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>Add Client</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="rate">Rate:</label>
            <input type="number" id="rate" required />
          </div>
          <div className="address-group">
            <label>Address:</label>
            <input type="text" placeholder="Line 1" required />
            <input type="text" placeholder="Line 2" />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Province" required />
            <input type="text" placeholder="Country" required />
            <input type="text" placeholder="Postal Code" required />
          </div>
          <button type="submit">Add Client</button>
        </form>
      </div>
    </div>
  );
}
