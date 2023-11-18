import { useReducer, useEffect } from "react";
import getClientData from "../apiRequests/retrieval/getClientData";

export const ACTIONS = {
  SET_ADDRESS: "SET_ADDRESS",
  SET_CLIENT: "SET_CLIENT",
  SET_NOT_INVOICED: "SET_NOT_INVOICED",
  SET_UNREVIEWED: "SET_UNREVIEWED",
  SET_INVOICES: "SET_INVOICES",
};

const reducer = (state, { type, payload }) => {
  const reducerObj = {
    SET_NOT_INVOICED: () => ({
      ...state,
      notInvoiced: payload,
    }),



  };

  if (Object.keys(reducerObj).includes(type)) {
    return reducerObj[type]();
  }
  return reducerObj.default();
};


const useClientData = (clientId) => {
  const initialState = {
    client: {},
    address: {},
    notInvoiced: [],
    unreviewed: [],
    invoices: []

  };
  const [client, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getClientData(clientId).then((data) => {
      dispatch({ type: ACTIONS.SET_CLIENT, payload: data.client });
      dispatch({ type: ACTIONS.SET_ADDRESS, payload: data.address });
      dispatch({ type: ACTIONS.SET_NOT_INVOICED, payload: data.notInvoiced });
      dispatch({ type: ACTIONS.SET_UNREVIEWED, payload: data.unreviewed });
      dispatch({ type: ACTIONS.SET_INVOICES, payload: data.invoices });
    });


  }, []);

  return { dispatch, client };
};

export default useClientData;
