import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';
import Modal from './Modal';

import bg1 from './Img/1.png';
import bg2 from './Img/2.png';
import bg3 from './Img/3.png';
import bg4 from './Img/4.png';
import bg5 from './Img/5.png';
import bg6 from './Img/6.png';
import bg7 from './Img/7.png';
import bg8 from './Img/8.png';
import bg9 from './Img/9.png';
import bg10 from './Img/10.png';

import bt21 from './Img/bt21.png';
import bt22 from './Img/bt22.png';
import bt23 from './Img/bt23.png';

import bt61 from './Img/bt61.png';
import bt61_right from './Img/bt61_right.png';
import bt62 from './Img/bt62.png';
import bt62_right from './Img/bt62_right.png';
import bt63 from './Img/bt63.png';
import bt63_right from './Img/bt63_right.png';
import bt64 from './Img/bt64.png';
import bt64_wrong from './Img/bt64_wrong.png';
import bt65 from './Img/bt65.png';
import bt65_right from './Img/bt65_right.png';
import bt66 from './Img/bt66.png';
import bt66_right from './Img/bt66_right.png';
import bt71 from './Img/bt71.png';
import bt72 from './Img/bt72.png';
import bt81 from './Img/bt81.png';
import bt82 from './Img/bt82.png';

import road_right from './Img/road_right.png';
import road_wrong from './Img/road_wrong.png';
import water_right from './Img/water_right.png';
import water_wrong from './Img/water_wrong.png';
import bag_wrong from './Img/bag_wrong.png';
import checklist from './Img/list.jpg';
import contact from './Img/contact.png';
import news from './Img/news.png';

import bgm from './Music/BGM.mp3';

function App() {

	const [isModalOpen, setOpen] = useState(false);
	const [img, setImg] = useState(bt21);

	return (
		<div className="App">

			<Modal
				isModalOpen={isModalOpen}
				closeModal={s => setOpen(false)}
				img={img}
			>
			</Modal>

			<ReactAudioPlayer
				src={bgm}
				autoPlay
				loop
			/>


			<div className="Comic" style={{ backgroundImage: `url(${bg1})` }}>

			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg2})` }}>
				<div style={{ position: "absolute", "left": "276px", "top": "82px" }}>
					<img
						src={bt21}
						className="bt2"
						onClick={s => {
							setOpen(true);
							setImg(contact);//change here
						}}>
					</img>
				</div>
				<div style={{ position: "absolute", "left": "91px", "top": "242px" }}>
					<img
						src={bt22}
						className="bt2"
						onClick={s => {
							setOpen(true);
							setImg(news);//change here
						}}>
					</img>
				</div>
				<div style={{ position: "absolute", "left": "293px", "top": "390px" }}>
					<img
						src={bt23}
						className="bt2"
						onClick={s => {
							setOpen(true);
							setImg(checklist);//change here
						}}>
					</img>
				</div>
			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg3})` }}>

			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg4})` }}>

			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg5})` }}>

			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg6})` }}>
				<div style={{ position: "absolute", "left": "64px", "top": "138px" }}>
					<img
						src={bt61}
						className="bt6"
						onClick={s => {
							s.currentTarget.src = bt61_right;
							// console.log(s.pageY);
							// console.log(s.currentTarget.src = bt62);
						}}>
					</img>
				</div>

				<div style={{ position: "absolute", "left": "253px", "top": "138px" }}>
					<img
						src={bt62}
						className="bt6"
						onClick={s => {
							s.currentTarget.src = bt62_right;
						}}>
					</img>
				</div>
				<div style={{ position: "absolute", "left": "453px", "top": "138px" }}>
					<img
						src={bt63}
						className="bt6"
						onClick={s => {
							s.currentTarget.src = bt63_right;
						}}>
					</img>
				</div>
				<div style={{ position: "absolute", "left": "637px", "top": "138px" }}>
					<img
						src={bt64}
						className="bt6"
						onClick={s => {
							setOpen(true);
							setImg(bag_wrong);
							s.currentTarget.src = bt64_wrong;

						}}>
					</img>
				</div>
				<div style={{ position: "absolute", "left": "359px", "top": "361px" }}>
					<img
						src={bt65}
						className="bt6"
						onClick={s => {
							s.currentTarget.src = bt65_right;

						}}>
					</img>
				</div>
				<div style={{ position: "absolute", "left": "590px", "top": "361px" }}>
					<img
						src={bt66}
						className="bt6"
						onClick={s => {
							s.currentTarget.src = bt66_right;

						}}>
					</img>
				</div>
			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg7})` }}>
				<div style={{ position: "absolute", "left": "603px", "top": "298px" }}>
					<img
						src={bt71}
						className="bt7"
						onClick={s => {
							setOpen(true);
							setImg(road_right);//change here
						}}>
					</img>
				</div>

				<div style={{ position: "absolute", "left": "603px", "top": "371px" }}>
					<img
						src={bt72}
						className="bt7"
						onClick={s => {
							setOpen(true);
							setImg(road_wrong);//change here
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
							setImg(water_right);//change here
						}}>
					</img>
				</div>

				<div style={{ position: "absolute", "left": "408px", "top": "347px" }}>
					<img
						src={bt82}
						className="bt8"
						onClick={s => {
							setOpen(true);
							setImg(water_wrong);//change here
						}}>
					</img>
				</div>
			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg9})` }}>

			</div>

			<div className="Comic" style={{ backgroundImage: `url(${bg10})` }}>

			</div>


		</div>
	);
}

export default App;


//git subtree push --prefix=build origin gh-pages
