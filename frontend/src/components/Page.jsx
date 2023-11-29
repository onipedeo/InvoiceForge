import { React, useEffect, useState } from "react";
import "../styles/page.scss";
import AddEditModal from "./AddEditModal";
import Day from "./Day";

const Page = (props) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState(null);
	

	const [formData, setFormData] = useState({
		appointmentRateCents: "",
		date: "",
		endTime: "",
		notes: "",
		startTime: "",
		clientId: "",
		clientName: "",
	});

	useEffect(() => {
		console.log(selectedEvent);
		if (selectedEvent) {
		}
	}, [selectedEvent]);

	const openModal = () => {
    setFormData({});
    setSelectedEvent(null);
		setModalOpen(true);
	};

	const closeModal = () => {
		setFormData({});
    setSelectedEvent(null);
		setModalOpen(false);
	};

	return (
		<div className="fullPage">
			{isModalOpen ? (
				<>
					<AddEditModal
						formData={formData}
						setFormData={setFormData}
						selectedEvent={selectedEvent}
						user={props.user}
						isOpen={isModalOpen}
						onClose={closeModal}
					/>
				</>
			) : (
				<>
					<Day
						setSelectedEvent={setSelectedEvent}
						setModalOpen={setModalOpen}
						user={props.user}
					/>
				</>
			)}
			<button id="floating-add-button" onClick={openModal}>
				➕
			</button>
		</div>
	);
};

export default Page;
