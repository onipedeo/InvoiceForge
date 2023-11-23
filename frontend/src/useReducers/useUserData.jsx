import requests from '../api/requests';

import { useReducer } from 'react';

// Helper to convert array entry to object based on id
const AToO = (array) =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});

// Define the initial state for userObj
const initialUserState = {
  userObj: {},
  isLoading: false,
  error: null,
};

// Define the reducer function for userObj
const userObjReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING_TRUE':
      return {
        ...state,
        isLoading: true,
      };
    case 'ASSIGN_DATA':
      return {
        ...state,
        userObj: action.payload.userObj,
        isLoading: false,
      };
    case 'FETCH_USER_DATA_FAILURE':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case 'UPDATE_USER_DATA':
      return {
        ...state,
        userObj: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

// Define the initial state for each data property
const initialDataState = {
  clients: {},
  appointments: {},
  reviewed: {},
  unreviewed: {},
  invoices: {},
  isLoading: false,
  error: null,
};

// Define the reducer function for each data property
const dataReducer = (state, action) => {
  switch (action.type) {
    case 'ASSIGN_DATA':
      return {
        ...state,
        // Convert array to object based on id and assign to given propertyName
        [action.payload.propertyName]: { ...AToO(action.payload.data) },
        isLoading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case 'SET_LOADING_TRUE':
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

// Define the custom hook
const useUserData = () => {
  const [user, userDispatch] = useReducer(userObjReducer, initialUserState);
  const [appointments, appointmentsDispatch] = useReducer(dataReducer, initialDataState);
  const [reviewed, reviewedDispatch] = useReducer(dataReducer, initialDataState);
  const [unreviewed, unreviewedDispatch] = useReducer(dataReducer, initialDataState);
  const [invoices, invoicesDispatch] = useReducer(dataReducer, initialDataState);
  const [clients, clientsDispatch] = useReducer(dataReducer, initialDataState);

  // Function to fetch user data
  const fetchUserData = (id) => {
    userDispatch({ type: 'SET_LOADING_TRUE' });

    // Make API call to retrieve user data
    requests.get.user(id).allData
      .then((userData) => {
        userDispatch({ type: 'ASSIGN_DATA', payload: userObj });


        // Assign each data property to its respective reducer
        ["appointments", "reviewed", "unreviewed", "invoices", "clients"].forEach((name) => {
          [name + 'Dispatch']({ type: 'ASSIGN_DATA', payload: { propertyName: name, data: userData[name] } });
        });

      })
      .catch((error) => {
        userDispatch({ type: 'FETCH_USER_DATA_FAILURE', payload: error.message });
      });
  };


  /**
   *
   * @param {string} typeName the name of the data type to be updated eg. 'appointment', 'client', 'user'
   * @param {object} newData the new data to be pushed to the database
   * @effect updates the object in the database and the local state
   */

  const updateObj = (typeName, newData) => {
    //if address exists, set address details aside for form submission
    let address;
    if (newData.address) {
      address = newData.address;
      newData.address = newData.address.id;
    }

    [typeName + Dispatch]({ type: 'SET_LOADING_TRUE' });

    requests.update[typeName](newData)
      .then(() => {
        if (address) newData.address = address;
        [typeName + 'Dispatch']({ type: `UPDATE_DATA`, payload: newData });
      })
      .catch((error) => {
        [typeName + 'Dispatch']({ type: `FETCH_USER_DATA_FAILURE`, payload: error.message });
      });
  };
  // Function to update client data







  return {
    userObj: user.userObj,
    data: {
      appointments,
      reviewed,
      unreviewed,
      invoices,
    },
    isLoading: user.isLoading || appointments.isLoading || reviewed.isLoading || unreviewed.isLoading || invoices.isLoading,
    error: user.error || appointments.error || reviewed.error || unreviewed.error || invoices.error,


    fetchUserData,
    updateUserObj,
  };
};

export default useUserData;
