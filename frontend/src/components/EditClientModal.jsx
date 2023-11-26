import { useState } from 'react';
import "../styles/edit-client-modal.scss";
import requests from '../api/requests';

export default function NewClientModal(props) {
  const {selectedClientIdtoEdit} = props
  console.log("state in edit modal", selectedClientIdtoEdit)
  
  return(<div className='edit-client-modal-container'>
   <h1>edit client modal for client id {selectedClientIdtoEdit}</h1> 
  </div>)
}