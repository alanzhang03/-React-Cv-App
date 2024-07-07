import "../componentStyles/Education.css";
import React, { useState } from "react";

export default function Education({
	school,
	handleSchoolChange,

	degree,
	handleDegreeChange,

	startDate,
	handleStartDateChange,

	endDate,
	handleEndDateChange,

	location,
	handleLocationChange,
}) {
	return (
		<div className="education">
			<form className="personal-details-form">
				<h1>Education</h1>

				<label htmlFor="school">School</label>
				<input
					type="text"
					id="school"
					name="school"
					value={school}
					onChange={handleSchoolChange}
					required
				/>

				<label htmlFor="degree">Degree</label>
				<input
					type="text"
					id="degree"
					name="degree"
					value={degree}
					onChange={handleDegreeChange}
				/>

				<label htmlFor="startDate">Start Date</label>
				<input
					type="date"
					id="startDate"
					name="startDate"
					value={startDate}
					onChange={handleStartDateChange}
				/>

				<label htmlFor="endDate">End Date</label>
				<input
					type="date"
					id="endDate"
					name="endDate"
					value={endDate}
					onChange={handleEndDateChange}
				/>

				<label htmlFor="location">Location</label>
				<input
					type="location"
					id="location"
					name="location"
					value={location}
					onChange={handleLocationChange}
				/>
			</form>
		</div>
	);
}
