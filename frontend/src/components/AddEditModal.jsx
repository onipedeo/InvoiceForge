import React, { useEffect, useState } from "react";
import "../styles/addEditModal.scss";
import requests from "../api/requests";

const AddEditModal = (props) => {
	const { formData, setFormData, selectedEvent, user } = props;

	useEffect(() => {
		console.log("selectedEvent", selectedEvent);
		if (selectedEvent) {
			console.log("selectedEvent", selectedEvent);
			const eventData = selectedEvent.appointment;
			const newFormData = {
				appointmentRateCents: eventData.appointmentRateCents,
				date: eventData.date,
				endTime: eventData.endTime,
				notes: eventData.notes,
				startTime: eventData.startTime,
				clientId: eventData.client.id,
				clientName: eventData.client.name,
			};
			console.log("newFormData", newFormData);
			setFormData(newFormData);
		}
	}, [selectedEvent]);
	console.log(formData);

	const [clients, setClients] = useState([]);

	const handleChange = (event) => {
		const type = event.target.type;
		const name = event.target.name;

		const value =
			type === "checkbox" ? event.target.checked : event.target.value;

		console.log("clients", clients);
		console.log("event.taget.value", event.target.value);
		if (event.target.name === "clientName") {
			const selectedClient = clients.find(
				(client) => client.id === parseInt(event.target.value)
			);
			setFormData((formData) => ({
				...formData,
				clientId: selectedClient
					? selectedClient.id
					: event.target.value,
			}));
		} else {
			setFormData((formData) => ({
				...formData,
				[name]: value,
			}));
		}
	};

	useEffect(() => {
		requests.get.user(props.user.id).clients.then((clients) => {
			setClients(clients);
			console.log("clients", clients);
		});
	}, [props.user]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(formData);
		try {
			const response = await requests.create.appointment(formData);
			console.log("response", response);

			// Close the modal
			props.onClose();
		} catch (error) {
			console.error("Error sending data", error);
		}
	};

	const handleEdit = async (event) => {
		event.preventDefault();
		console.log("selected event insde the handleedit fn", selectedEvent);
		const edittedappointment = {
			appointmentId: selectedEvent.appointment.id,
			date: formData.date,
			startTime: formData.startTime,
			endTime: formData.endTime,
			clientId: selectedEvent.appointment.client.id,
			userId: user.id,
			appointmentRateCents: formData.appointmentRateCents,
			notes: formData.notes,
		};
		try {
			console.log("formData before api call for edit", formData);
			console.log(
				"eddittedappointment before api call for edit",
				edittedappointment
			);
			const url = `/api/appointment/${edittedappointment.appointmentId}`;
			const reqOptions = {
				method: "PUT",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(edittedappointment),
			};
			fetch(url, reqOptions);
			alert("updated successfully");
			// requests.update.appointment(
			// 	edittedappointment.id,
			// 	edittedappointment
			// );
		} catch (error) {
			console.error("Error sending data", error);
		}
		props.onClose();
	};

	const handleDeleteAppointment = async (event) => {
		event.preventDefault();
		try {
			const appointmentId = selectedEvent.appointment.id;
			console.log(
				"selectedEvent before sending delete request",
				selectedEvent.appointment.id
			);
			const url = `/api/appointment/${appointmentId}`;
			fetch(url, {
				method: "DELETE",
				headers: { "content-type": "application/json" },
			});
			alert("appointment deleted");
			// requests.delete.appointment(appointmentId);
		} catch (error) {
			console.error("appointment not deleted", error);
		}
		props.onClose();
	};

	return (
		props.isOpen && (
			<div className="addEditModal">
				{selectedEvent ? (
					<h2>Edit an appointment</h2>
				) : (
					<h2>Book an Appointment</h2>
				)}

				<form>
					<button
						className="close-modal"
						type=""
						onClick={props.onClose}
					>
						❌
					</button>
					<label>Client Name:</label>
					{console.log("formData clientname", formData.clientName)}
					<select
						name="clientName"
						value={formData.clientName}
						onChange={handleChange}
						type="text"
					>
						{selectedEvent ? (
							// ? clients.map((client) =>
							// 		client.name === formData.clientName ? (
							<option
								// key={client.id}
								// name="clientId"
								// value={client.id}
								disabled
							>
								{formData.clientName}
							</option>
						) : (
							// ) : null

							clients.map((client) => (
								<option
									key={client.id}
									name="clientId"
									value={client.id}
								>
									{client.name}
								</option>
							))
						)}
					</select>

					<label>Date:</label>
					<input
						type="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
					/>
					<label>Start Time:</label>
					<input
						type="time"
						name="startTime"
						value={formData.startTime}
						onChange={handleChange}
					/>
					<label>End Time:</label>
					<input
						type="time"
						name="endTime"
						value={formData.endTime}
						onChange={handleChange}
					/>
					<label>Appointment Rate (cents) :</label>
					<input
						type="number"
						step={100}
						name="appointmentRateCents"
						value={formData.appointmentRateCents}
						onChange={handleChange}
					/>
					<label>Notes:</label>
					<textarea
						name="notes"
						value={formData.notes}
						onChange={handleChange}
					/>
					<br />
					<button
						className="addEditModalBtn"
						type="submit"
						onClick={selectedEvent ? handleEdit : handleSubmit}
					>
						Save Appointment
					</button>
					{selectedEvent && (
						<button
							onClick={handleDeleteAppointment}
							className="addEditModalBtn"
						>
							Delete Appointment
						</button>
					)}
				</form>
			</div>
		)
	);
};

export default AddEditModal;
