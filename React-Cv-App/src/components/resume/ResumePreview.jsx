import React from "react";
import "../componentStyles/ResumePreview.css";

export default function ResumePreview({ data }) {
	return (
		<div className="resume-preview">
			<div className="resume-preview-container">
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
						<h1 className="education-header">Education</h1>
						<div className="education-info-container">
							<div className="education-dates-and-location">
								<div>
									{data.startDate} - {data.endDate}
								</div>
								<div>{data.location}</div>
							</div>
							<div className="education-school-and-degree">
								<div className="education-school"> {data.school}</div>
								<div> {data.degree}</div>
							</div>
						</div>
					</div>

					<div className="experience-section-resume">
						<h1 className="experience-header">Experience</h1>
						<div className="experience-info-container">
							<div className="experience-dates-and-location">
								<p>{data.startDateExp}</p>
								<p>{data.endDateExp}</p>
								<p>{data.locationExp}</p>
							</div>
							<div className="experience-company-position-jobDescription">
								<p>{data.company}</p>
								<p>{data.position}</p>
								<p>{data.jobDescription}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
