import React, { useEffect, useState } from "react";
import "../styles/addEditModal.scss";
import requests from "../api/requests";

const AddEditModal = (props) => {
	const [formData, setFormData] = useState({
		appointmentRateCents: "",
		date: "",
		endTime: "",
		notes: "",
		startTime: "",
		clientId: "",
	});
	const [clients, setClients] = useState([]);

	const handleChange = (event) => {
		const type = event.target.type;
		const name = event.target.name;

		const value =
			type === "checkbox" ? event.target.checked : event.target.value;

		if (event.target.tagName.toLowerCase() === "select") {
			const selectedClient = clients.find(
				(client) => client.id === parseInt(event.target.value)
			);
			setFormData((formData) => ({
				...formData,
				clientId: selectedClient ? selectedClient.id : "", // Update clientId
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

	return (
		props.isOpen && (
			<div className="addEditModal">
				<h2>Book an Appointment</h2>

				<form>
					<button
						className="close-modal"
						type=""
						onClick={props.onClose}
					>
						❌
					</button>
					<label>Client Name:</label>
					<select
						name="clientName"
						id=""
						value={formData.clientName}
						onChange={handleChange}
						type="text"
					>
						{clients.map((client) => (
							<option
								key={client.id}
								name="clientId"
								value={client.id}
							>
								{client.name}
							</option>
						))}
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
						value={formData.appointment_rate_cents}
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
						onClick={handleSubmit}
					>
						Save Appointment
					</button>
				</form>
			</div>
		)
	);
};

export default AddEditModal;
