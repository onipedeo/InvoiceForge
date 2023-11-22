# Importing "requests"
is streamlined for dot notation

to start, import the requests object from the api module

```javascript

import requests from '/api'

```
> note: "/api" not a relative path, but an absolute path from the root of the frontend. There is no "." before the "/".


Then, use the requests object to make build requests to the backend
```javascript
// example: with userData by id

// set up state
const [appointments, setAppointments] = useState([]);
const [clients, setClients] = useState([]);
const [invoices, setInvoices] = useState([]);

useEffect(() => {
  // get the user's data
  requests.get.userData(id).then((userData) =>
  //seperate the data into variables
    const { appointments, clients, invoices } = userData
    // do something with the data
    setAppointments(appointments)
    setClients(clients)
    setInvoices(invoices)
  );
}, [id]);

```

# Using Requests in components
These were build with component state handling in mind.

Until useReducers are set up,
The Reccommended way to use is:

## fetching:
> - Inside useEffect
>   - run once on component mount.
>     - Use the requests object to make the request,
>     - Use the response to set states

## updating, creating, deleting:
> - Inside event handlers
>   - Use the requests object to make the request,
>   - Use the response to set states
>


# Using Requests in useReducers

that same logic will be integrated into the useReducers when they are set up.

 I think 4 reducers will be needed, one for each of these data objects:
 - user
 - appointement
 - client
 - invoice

 Each reducer will:
 - handle all state for that object.
 - Import the requests object to make Api requests
 - use request responses to set state.

# Data flow with useReducers

 - The requests object will be imported into the reducer
 - The reducer will be imported into the component.
 - The component will dispatch actions to the reducer
 - The reducer will update and return new state to the component.
 - The component will then use the new state to render the page.
