import React from "react";
import "../componentStyles/ResumePreview.css";

export default function ResumePreview({ data }) {
	return (
		<div className="resume-preview">
			<h1>{data.fullName}</h1>
			<p>Email: {data.email}</p>
			<p>Phone: {data.phone}</p>
			<p>Address: {data.address}</p>
		</div>
	);
};

