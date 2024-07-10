import React, { useState } from "react";
import Education from "../formInfo/Education";
import Experience from "../formInfo/Experience";
import Personal from "../formInfo/Personal";
import ResumePreview from "./ResumePreview";
import FormHeader from "../formInfo/FormHeader";
import Skills from "../formInfo/Skills";
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
	const [startDate, setStartDate] = useState("08/2022");
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

	const [company, setCompany] = useState("MindHome");
	const [position, setPosition] = useState("Software Developer Intern");
	const [startDateExp, setStartDateExp] = useState("04/2024");
	const [endDateExp, setEndDateExp] = useState("present");
	const [locationExp, setLocationExp] = useState("Remote");
	const [jobDescription, setJobDescription] = useState(
		"Worked on updates and enhancements to the company website, leveraging React for web application portions and React Native for mobile optimizations. Contributed personal insights and recommendations for leveraging React to enhance aesthetics and functionality of our web application."
	);

	function handleCompanyChange(e) {
		setCompany(e.target.value);
	}

	function handlePositionChange(e) {
		setPosition(e.target.value);
	}

	function handleStartDateExpChange(e) {
		setStartDateExp(e.target.value);
	}

	function handleEndDateExpChange(e) {
		setEndDateExp(e.target.value);
	}

	function handleLocationExpChange(e) {
		setLocationExp(e.target.value);
	}

	function handleJobDescriptionChange(e) {
		setJobDescription(e.target.value);
	}

	const [programmingLanguages, setProgrammingLanguages] = useState(
		"JavaScript, Python, Java, C, C#, Rust, Ocaml"
	);
	const [webTech, setWebTech] = useState(
		"React.js, Node.js, HTML, CSS, Hooks API"
	);
	const [softwareTool, setSoftwareTool] = useState(
		"MATLAB, RStudio, Github, Microsoft Office, Excel"
	);
	const [concepts, setConcepts] = useState("Data Structures, Algorithms, Object-Oriented Programming");

	function handleProgrammingLanguagesChange(e) {
		setProgrammingLanguages(e.target.value);
	}

	function handleWebTechChange(e) {
		setWebTech(e.target.value);
	}

	function handleSoftwareToolChange(e) {
		setSoftwareTool(e.target.value);
	}

	function handleConceptsChange(e) {
		setConcepts(e.target.value);
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
		company,
		position,
		startDateExp,
		endDateExp,
		locationExp,
		jobDescription,
		programmingLanguages,
		webTech,
		softwareTool,
		concepts,
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
				<Experience
					company={company}
					position={position}
					startDateExp={startDateExp}
					endDateExp={endDateExp}
					locationExp={locationExp}
					jobDescription={jobDescription}
					handleCompanyChange={handleCompanyChange}
					handlePositionChange={handlePositionChange}
					handleStartDateExpChange={handleStartDateExpChange}
					handleEndDateExpChange={handleEndDateExpChange}
					handleLocationExpChange={handleLocationExpChange}
					handleJobDescriptionChange={handleJobDescriptionChange}
				/>
				<Skills
					programmingLanguages={programmingLanguages}
					webTech={webTech}
					softwareTool={softwareTool}
					concepts={concepts}
					handleProgrammingLanguagesChange={handleProgrammingLanguagesChange}
					handleWebTechChange={handleWebTechChange}
					handleSoftwareToolChange={handleSoftwareToolChange}
					handleConceptsChange={handleConceptsChange}
				/>
			</div>
			<div className="resume-preview">
				<ResumePreview data={formData} />
			</div>
		</div>
	);
}
