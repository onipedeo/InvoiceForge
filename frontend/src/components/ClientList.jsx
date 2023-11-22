import { useState } from 'react';
import "../styles/client-list.scss"
import NewClientModal from "./NewClientModal";

export default function ClientList() {

  const [isClientModalOpen, setClientModelOpen] = useState(false);

 const handleNewClientModalClick = () => {
     setClientModelOpen(true)
  };

  return (
    <div className="client-list-container">
      
        <p>Client List Content</p>
        <button onClick={handleNewClientModalClick}>Add New Client</button>
        {isClientModalOpen && <NewClientModal setClientModelOpen={setClientModelOpen}/>}
    </div>
  );
  }