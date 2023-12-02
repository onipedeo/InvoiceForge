import { React, useEffect, useState } from "react";
import "../styles/page.scss";
import AddEditModal from "./AddEditModal";
import Day from "./Day";

const Page = (props) => {
	const [show, setShow] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState(null);

	useEffect(() => {
		if (selectedEvent) {
		}
	}, [selectedEvent]);


	const handleShow = () => {
		setSelectedEvent(null);
		setShow(true);
	};

	const handleClose = () => {
		setSelectedEvent(null);
		setShow(false);
	};

	return (
		<div className="fullPage">
			{show ? (
				<>
					<AddEditModal
						selectedEvent={selectedEvent}
						user={props.user}
						show={show}
						onClose={handleClose}
					/>
				</>
			) : (
				<>
					<Day
						setSelectedEvent={setSelectedEvent}
						setShow={setShow}
						user={props.user}
					/>
				</>
			)}
			<button id="floating-add-button" onClick={handleShow}>
				➕
			</button>
		</div>
	);
};

export default Page;
