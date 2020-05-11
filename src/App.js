import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

import bg1 from './Img/1.png';
import bg2 from './Img/2.png';
import bg3 from './Img/3.png';
import bg5 from './Img/5.png';


import bt2 from './Img/bt2.png';


function App() {

	const [isModalOpen, setOpen] = useState(false);

	return (
		<div className="App">

			<Modal
				isModalOpen={isModalOpen}
				closeModal={s => setOpen(false)}
			>
				<img
					width="100%"
					src={bt2}
					alt="unsplash"
				/>
			</Modal>


			<div className="Comic" style={{ backgroundImage: `url(${bg1})` }}>

			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg2})` }}>
				<img src={bt2} className="bt2" onClick={s => setOpen(true)}>

				</img>
			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg3})` }}>

			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg5})` }}>

			</div>
		</div>
	);
}

export default App;


