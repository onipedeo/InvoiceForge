const confirmHours = (appointment, hours) => {
  <button className="btn btn-primary"
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
        dispatch({ type: actions.moveToReviewed, payload: { formData } });
      }
    }
  >
    Confirm
  </button>;
};
