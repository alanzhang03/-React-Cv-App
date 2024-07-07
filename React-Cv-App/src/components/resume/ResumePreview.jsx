import React from "react";
import "../componentStyles/ResumePreview.css";

export default function ResumePreview({ data }) {
	return (
		<div className="resume-preview">
			<div className="resume-personal-container">
				<h1 className="full-name">{data.fullName}</h1>
				<div className="personal-info-container">
					<li>✉️ {data.email}</li>
					<li>📞 {data.phone}</li>
					<li>📍 {data.address}</li>
				</div>
			</div>
			<div className="resume-other-container">
				<div className="education-section-resume">
					<h1>Education</h1>
					<li> {data.school}</li>
					<li> {data.degree}</li>
					<li> {data.startDate}</li>
					<li> {data.endDate}</li>
					<p>{data.location}</p>
				</div>

				<div className="experience-section-resume">
					<h1>Experience</h1>
					<p>{data.company}</p>
					<p>{data.position}</p>
					<p>{data.startDateExp}</p>
					<p>{data.endDateExp}</p>
					<p>{data.locationExp}</p>
					<p>{data.jobDescription}</p>
				</div>
			</div>
		</div>
	);
}
