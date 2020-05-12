import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

import bg1 from './Img/1.png';
import bg2 from './Img/2.png';
import bg3 from './Img/3.png';
import bg5 from './Img/5.png';
import bg6 from './Img/6.png';
import bg7 from './Img/7.png';
import bg8 from './Img/8.png';


import bt2 from './Img/bt2.png';
import bt61 from './Img/bt61.png';
import bt62 from './Img/bt62.png';
import bt63 from './Img/bt63.png';
import bt64 from './Img/bt64.png';
import bt65 from './Img/bt65.png';
import bt66 from './Img/bt66.png';
import bt71 from './Img/bt71.png';
import bt72 from './Img/bt72.png';
import bt81 from './Img/bt81.png';
import bt82 from './Img/bt82.png';



function App() {

	const [isModalOpen, setOpen] = useState(false);
	const [img, setImg] = useState(bt2);

	return (
		<div className="App">

			<Modal
				isModalOpen={isModalOpen}
				closeModal={s => setOpen(false)}
				img={img}
			>
			</Modal>


			<div className="Comic" style={{ backgroundImage: `url(${bg1})` }}>

			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg2})` }}>
				<img
					src={bt2}
					className="bt2"
					onClick={s => {
						setOpen(true);
						setImg(bt2);//change here
					}}>
				</img>
			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg3})` }}>

			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg5})` }}>

			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg6})` }}>
				<div style={{ position: "absolute", "left": "64px", "top": "138px" }}>
					<img
						src={bt61}
						className="bt6"
						onClick={s => {
							setOpen(true);
							setImg(bt2);//change here
						}}>
					</img>
				</div>

				<div style={{ position: "absolute", "left": "253px", "top": "138px" }}>
					<img
						src={bt62}
						className="bt6"
						onClick={s => {
							setOpen(true);
							setImg(bt2);//change here
						}}>
					</img>
				</div>
				<div style={{ position: "absolute", "left": "453px", "top": "138px" }}>
					<img
						src={bt63}
						className="bt6"
						onClick={s => {
							setOpen(true);
							setImg(bt2);//change here
						}}>
					</img>
				</div>
				<div style={{ position: "absolute", "left": "637px", "top": "138px" }}>
					<img
						src={bt64}
						className="bt6"
						onClick={s => {
							setOpen(true);
							setImg(bt2);//change here
						}}>
					</img>
				</div>
				<div style={{ position: "absolute", "left": "359px", "top": "361px" }}>
					<img
						src={bt65}
						className="bt6"
						onClick={s => {
							setOpen(true);
							setImg(bt2);//change here
						}}>
					</img>
				</div>
				<div style={{ position: "absolute", "left": "590px", "top": "361px" }}>
					<img
						src={bt66}
						className="bt6"
						onClick={s => {
							setOpen(true);
							setImg(bt2);//change here
						}}>
					</img>
				</div>
			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg7})` }}>
				<div style={{ position: "absolute", "left": "578px", "top": "298px" }}>
					<img
						src={bt71}
						className="bt7"
						onClick={s => {
							setOpen(true);
							setImg(bt2);//change here
						}}>
					</img>
				</div>

				<div style={{ position: "absolute", "left": "578px", "top": "371px" }}>
					<img
						src={bt72}
						className="bt7"
						onClick={s => {
							setOpen(true);
							setImg(bt2);//change here
						}}>
					</img>
				</div>
			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg8})` }}>
				<div style={{ position: "absolute", "left": "408px", "top": "101px" }}>
					<img
						src={bt81}
						className="bt8"
						onClick={s => {
							setOpen(true);
							setImg(bt2);//change here
						}}>
					</img>
				</div>

				<div style={{ position: "absolute", "left": "408px", "top": "347px" }}>
					<img
						src={bt82}
						className="bt8"
						onClick={s => {
							setOpen(true);
							setImg(bt2);//change here
						}}>
					</img>
				</div>
			</div>

		</div>
	);
}

export default App;


//git subtree push --prefix=build origin gh-pages
