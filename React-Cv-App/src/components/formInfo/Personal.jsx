import React, { useState } from "react";
import "../componentStyles/Personal.css";

export default function Personal() {
	const [fullName, setfullName] = useState("Alan Zhang");
	const [email, setEmail] = useState("alan.s.zhang@gmail.com");
	const [phone, setPhone] = useState("+1 484-860-0997");
	const [address, setAddress] = useState("Philadelphia, PA");

	function handleChangeFullName(e) {
		setfullName(e.target.value);
	}
	function handleChangeEmail(e) {
		setEmail(e.target.value);
	}
	function handleChangePhone(e) {
		setPhone(e.target.value);
	}
	function handleChangeAddress(e) {
		setAddress(e.target.value);
	}

	return (
		<div className="personal">
			<form className="personal-details-form">
				<h1>Personal Details</h1>

				<label for="fullName">Full Name</label>
				<input
					type="text"
					id="fullName"
					name="fullName"
					value={fullName}
					onChange={handleChangeFullName}
					required
				></input>

				<label for="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={handleChangeEmail}
				></input>

				<label for="phone">Phone Number</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					value={phone}
					onChange={handleChangePhone}
				></input>

				<label for="address">Address</label>
				<input
					type="text"
					id="address"
					name="address"
					value={address}
					onChange={handleChangeAddress}
				></input>
			</form>
		</div>
	);
}
