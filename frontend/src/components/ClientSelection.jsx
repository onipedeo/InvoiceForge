import "../styles/clientSelection.scss";
import { useEffect, useRef } from "react";

const ClientSelection = ({ selectedClient, handleClientSelect, clients }) => {
  const selectRef = useRef();
  useEffect(() => {
    if (selectedClient === null) {
      selectRef.current.value = ""; // reset the select value
    }
  }, [selectedClient]);

  return (
    <div>
      <label className="select-client-label">Client List</label>
      <select
        ref={selectRef}
         onChange={(e) => handleClientSelect(parseInt(e.target.value))}
      >
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
