const EditAppointment = ({ appointment, setAppointment }) => {
  const [hours, setHours] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Extract values from the appointment prop
  const { confirmedHours, date, client, startTime, endTime, id } = appointment;

  useEffect(() => {
    if (typeof appointment === 'object' && Object.keys(appointment).length > 0) {
      if (appointment.confirmedHours) {
        setHours(appointment.confirmedHours);
      } else {
        const { startTime, endTime } = appointment;
        const estimatedHours = moment.duration(moment(endTime, "HH:mm:ss").diff(moment(startTime, "HH:mm:ss"))).asHours();
        const roundedEstimatedHours = Math.round(estimatedHours / 0.25) * 0.25;
        setHours(roundedEstimatedHours);
      }
    }
  }, [appointment]);

  return (
    <tr key={id} className="appointment-list-item">
      <td>{client.name}</td>
      <td>{date}</td>
      <td>{startTime}</td>
      <td>{endTime}</td>
      <td className='col-auto'>{
        confirmedHours ||
        <input type="number" className='number-input' name="confirmedHours" min="0.25" step="0.25" value={hours} onChange={(e) => {
          setHours(e.target.value);
        }} />
      }</td>
      <td>
        <button
          onClick={
            () => {
              const formData = new FormData();
              for (const field in appointment) {
                if (field === 'confirmedHours') {
                  formData.append('confirmedHours', hours);
                  continue;
                }
                if (field === 'client') {
                  formData.append('clientId', appointment.client.id);
                  continue;
                }
                formData.append(field, appointment[field]);
              }
              dispatch({ type: actions.moveToReviewed, payload: {formData} });
            }
          }
        >
          confirm
        </button>
      </td>
    </tr>
  );
}
