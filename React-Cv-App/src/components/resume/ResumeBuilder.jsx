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

	function handleChangeFullName(e) {
		setFullName(e.target.value);
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

	const [school, setSchool] = useState("University of Maryland, College Park");
	const [degree, setDegree] = useState("Bachelors in Computer Science");
	const [startDate, setStartDate] = useState("08/2020");
	const [endDate, setEndDate] = useState("present");
	const [location, setLocation] = useState("College Park, MD");

	function handleSchoolChange(e) {
		setSchool(e.target.value);
	}

	function handleDegreeChange(e) {
		setDegree(e.target.value);
	}

	function handleStartDateChange(e) {
		setStartDate(e.target.value);
	}

	function handleEndDateChange(e) {
		setEndDate(e.target.value);
	}

	function handleLocationChange(e) {
		setLocation(e.target.value);
	}

	const formData = {
		fullName,
		email,
		phone,
		address,
		school,
		degree,
		startDate,
		endDate,
		location,
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
					handleChangeFullName={handleChangeFullName}
					handleChangeEmail={handleChangeEmail}
					handleChangePhone={handleChangePhone}
					handleChangeAddress={handleChangeAddress}
				/>
				<Education
					school={school}
					degree={degree}
					startDate={startDate}
					endDate={endDate}
					location={location}
					handleSchoolChange={handleSchoolChange}
					handleDegreeChange={handleDegreeChange}
					handleStartDateChange={handleStartDateChange}
					handleEndDateChange={handleEndDateChange}
					handleLocationChange={handleLocationChange}
				/>
				<Experience />
			</div>
			<div className="resume-preview">
				<ResumePreview data={formData} />
			</div>
		</div>
	);
}
