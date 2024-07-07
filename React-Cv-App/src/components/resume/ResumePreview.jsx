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

				
			</div>


		</div>
	);
}
