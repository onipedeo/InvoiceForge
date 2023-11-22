import { useState } from 'react';
import "../styles/client-list.scss"
import NewClientModal from "./NewClientModal";

export default function ClientList(props) {

  const [isClientModalOpen, setClientModelOpen] = useState(false);
  const {user} = props
  console.log(user)

  const fetchClient = async () => {
    try {
      const userData = await requests.get.userData(user.id);
      const { clients } = userData;
      console.log("clients", clients)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

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