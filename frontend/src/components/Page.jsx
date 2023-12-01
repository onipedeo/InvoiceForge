import { React, useEffect, useState } from "react";
import "../styles/page.scss";
import AddEditModal from "./AddEditModal";
import Day from "./Day";

const Page = (props) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState(null);

	useEffect(() => {
		console.log(selectedEvent);
		if (selectedEvent) {
		}
	}, [selectedEvent]);

	const openModal = () => {
    setSelectedEvent(null);
		setModalOpen(true);
	};

	const closeModal = () => {
    setSelectedEvent(null);
		setModalOpen(false);
	};

	return (
		<div className="fullPage">
			{isModalOpen ? (
				<>
					<AddEditModal
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
