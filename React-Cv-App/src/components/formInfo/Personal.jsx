import React from "react";
import "../componentStyles/Personal.css";

export default function Personal({
	fullName,
	email,
	phone,
	address,
	onChangeFullName,
	onChangeEmail,
	onChangePhone,
	onChangeAddress,
}) {
	const handleChangeFullName = (e) => {
		onChangeFullName(e.target.value);
	};

	const handleChangeEmail = (e) => {
		onChangeEmail(e.target.value);
	};

	const handleChangePhone = (e) => {
		onChangePhone(e.target.value);
	};

	const handleChangeAddress = (e) => {
		onChangeAddress(e.target.value);
	};

	return (
		<div className="personal">
			<form className="personal-details-form">
				<h1>Personal Details</h1>

				<label htmlFor="fullName">Full Name</label>
				<input
					type="text"
					id="fullName"
					name="fullName"
					value={fullName}
					onChange={handleChangeFullName}
					required
				/>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={handleChangeEmail}
				/>

				<label htmlFor="phone">Phone Number</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					value={phone}
					onChange={handleChangePhone}
				/>

				<label htmlFor="address">Address</label>
				<input
					type="text"
					id="address"
					name="address"
					value={address}
					onChange={handleChangeAddress}
				/>
			</form>
		</div>
	);
}
