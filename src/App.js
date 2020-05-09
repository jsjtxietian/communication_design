import React, { Children,useState } from 'react';
import './App.css';
import bt from './Img/b1.jpg';
import Modal from './Modal';


function App() {

	const [isModalOpen, setOpen] = useState(false);
	let closeModal = s => setOpen(false);

	return (
		<div className="App">

			<Modal
				isModalOpen={isModalOpen}
				closeModal={closeModal}
			>
				<img
					width="100%"
					style={{ borderRadius: 3 }}
					src={bt}
					alt="unsplash"
				/>
			</Modal>

			<div className="Intro">
				<img src={bt} className="bt" alt="alt" onClick={s => setOpen(true)}>

				</img>
			</div>
			<div className="Before">

			</div>
		</div>
	);
}

export default App;


