import React from "react";
import "../componentStyles/Personal.css";

export default function Personal({
	fullName,
	email,
	phone,
	address,
	handleChangeFullName,
	handleChangeEmail,
	handleChangeAddress,
	handleChangePhone,
}) {
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
					className="address-input"
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
