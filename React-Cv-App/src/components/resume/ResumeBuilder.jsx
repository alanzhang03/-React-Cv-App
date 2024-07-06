import React, { useState } from "react";
import Education from "../formInfo/Education";
import Experience from "../formInfo/Experience";
import Personal from "../formInfo/Personal";
import ResumePreview from "./ResumePreview";
import FormHeader from "../formInfo/FormHeader";
import "../componentStyles/ResumeBuilder.css";

export default function ResumeBuilder() {
	const [fullName, setFullName] = useState("Alan Zhang");
	const [email, setEmail] = useState("alan.s.zhang@gmail.com");
	const [phone, setPhone] = useState("+1 484-860-0997");
	const [address, setAddress] = useState("Philadelphia, PA");
	const handleChangeFullName = (value) => {
		setFullName(value);
	};
	const handleChangeEmail = (value) => {
		setEmail(value);
	};
	const handleChangePhone = (value) => {
		setPhone(value);
	};
	const handleChangeAddress = (value) => {
		setAddress(value);
	};

	const formData = {
		fullName,
		email,
		phone,
		address,
	};

	return (
		<div className="resume-builder">
			<div className="form-section">
				<FormHeader className="form-header"></FormHeader>
				<Personal
					fullName={fullName}
					email={email}
					phone={phone}
					address={address}
					onChangeFullName={handleChangeFullName}
					onChangeEmail={handleChangeEmail}
					onChangePhone={handleChangePhone}
					onChangeAddress={handleChangeAddress}
				/>
				<Education />
				<Experience />
			</div>
			<div className="resume-preview">
				<ResumePreview data={formData} />
			</div>
		</div>
	);
}
