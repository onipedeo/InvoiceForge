const ClientSelection = ({ handleClientSelect, clients }) => {
  return (
    <div>
      <label>Client List</label>
      <select onChange={(e) => handleClientSelect(parseInt(e.target.value))}>
        <option disabled selected value="">
          select a client
        </option>
        {clients.map((client) => (
          <option key={client.id} value={client.id}>
            {client.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ClientSelection;
