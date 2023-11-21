
  // const [appointments, setAppointments] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/appointment")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setAppointments([data]);
  //     console.log(data)
  //   });
  // }, []);


import React from "react";
import AppointmentsContainer from "./AppointmentContainer"

const SimpleAppointments = () => {
  return (
    <div>
      <AppointmentsContainer />
    </div>
  );
};

export default SimpleAppointments;
