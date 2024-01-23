import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [placeHolder, setPlaceHolder] = useState("test");
	/*
	useEffect(() => {
		axios
			.get("https://loripsum.net/api/1/short/plaintext", {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then(res => console.log(res));
	});
	*/

	async function handleRequst() {
		const res = await axios.get("https://loripsum.net/api/1/short/plaintext", {
			headers: {
				"Content-Type": "application/json",
			},
		});

		console.log(res.response.data);
	}

	return (
		<div className="App">
			<div className="navbar">
				<>
					<h2 className="about-us">About Us</h2>
					<h1 className="center-heading">Kraftrs.</h1>
					<h2 className="product">Product</h2>
				</>
			</div>
			<div className="container">
				<div className="image-container">
					<img
						src="https://i.postimg.cc/Jn56f56V/shoe.webp"
						alt="Shoe"
						className="shoe-image"
						onClick={handleRequst}
					/>
				</div>
				<div className="text-container">
					<p className="text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					</p>
				</div>
			</div>
			<div className="footer-container">
				<i className="fa fa-instagram" id="instagram-icon"></i>
				<i className="fa fa-linkedin" id="linkedin-icon"></i>
			</div>
		</div>
	);
}

export default App;
