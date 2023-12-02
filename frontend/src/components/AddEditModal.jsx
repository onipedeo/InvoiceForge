import React, { useEffect, useState } from "react";
import "../styles/addEditModal.scss";
import requests from "../api/requests";
import { Modal, Button } from "react-bootstrap";


function AddEditModal(props) {

	const { show, handleClose } = props;
	const defaultFormData = {
		appointmentRateCents: 0,
		date: "",
		endTime: "",
		notes: "",
		startTime: "",
		clientId: "",
		clientName: "",
	};
	const { selectedEvent, user } = props;
	const [formData, setFormData] = useState(defaultFormData);

	useEffect(() => {
		if (selectedEvent) {
			const eventData = selectedEvent.appointment;
			const { appointmentRateCents, date, endTime, notes, startTime } = eventData;
			const { id: clientId, name: clientName } = eventData.client;
			const newFormData = {
				appointmentRateCents,
				date,
				endTime,
				notes,
				startTime,
				clientId,
				clientName
			};
			setFormData(newFormData);
		}
	}, [selectedEvent]);

	const [clients, setClients] = useState([]);

	const handleChange = (event) => {
		const type = event.target.type;
		const name = event.target.name;

		const value =
			type === "checkbox" ? event.target.checked : event.target.value;


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
		});
	}, [props.user]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await requests.create.appointment(formData);

			// Close the modal
			props.onClose();
		} catch (error) {
			console.error("Error sending data", error);
		}
	};

	const handleEdit = async (event) => {
		event.preventDefault();
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
			const url = `/api/appointment/${edittedappointment.appointmentId}`;
			const reqOptions = {
				method: "PUT",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(edittedappointment),
			};
			fetch(url, reqOptions);
			alert("updated successfully");

		} catch (error) {
			console.error("Error sending data", error);
		}
		props.onClose();
	};

	const handleDeleteAppointment = async (event) => {
		event.preventDefault();
		try {
			const appointmentId = selectedEvent.appointment.id;
			const url = `/api/appointment/${appointmentId}`;
			fetch(url, {
				method: "DELETE",
				headers: { "content-type": "application/json" },
			});
			alert("appointment deleted");
		} catch (error) {
			console.error("appointment not deleted", error);
		}
		props.onClose();
	};

	return (
		<>
			<Modal
				show={show}
				onHide={props.onClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>{selectedEvent ? (
						<h2>Edit an appointment</h2>
					) : (
						<h2>Book an Appointment</h2>
					)}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="addEditModal">
						<form className="form">
							<label>Client Name:</label>
							<select
								name="clientName"
								value={formData.clientName}
								onChange={handleChange}
								type="text"
							>
								{!formData.clientName && (
									<option value="" disabled selected>
										Pick a client
									</option>
								)}
								{selectedEvent ? (
									<option disabled>{formData.clientName}</option>
								) : (
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
						</form>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button
						type="submit"
						onClick={selectedEvent ? handleEdit : handleSubmit}
					>
						Save Appointment
					</Button>
					{selectedEvent && (
						<Button variant="danger"
							onClick={handleDeleteAppointment}
						>
							Delete Appointment
						</Button>
					)}
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddEditModal;