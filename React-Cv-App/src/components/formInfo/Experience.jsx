import "../componentStyles/Experience.css";

export default function Experience({
	company,
	handleCompanyChange,

	position,
	handlePositionChange,

	startDateExp,
	handleStartDateExpChange,

	endDateExp,
	handleEndDateExpChange,

	locationExp,
	handleLocationExpChange,

	jobDescription,
	handleJobDescriptionChange,
}) {
	return (
		<div className="experience">
			<form className="personal-details-form">
				<h1>Experience</h1>

				<label htmlFor="company">Company</label>
				<input
					type="text"
					id="company"
					name="company"
					value={company}
					onChange={handleCompanyChange}
				/>

				<label htmlFor="position">Position</label>
				<input
					type="text"
					id="position"
					name="position"
					value={position}
					onChange={handlePositionChange}
				/>

				<label htmlFor="startDateExp">Start Date</label>
				<input
					type="date"
					id="startDateExp"
					name="startDateExp"
					value={startDateExp}
					onChange={handleStartDateExpChange}
				/>

				<label htmlFor="endDateExp">End Date</label>
				<input
					type="date"
					id="endDateExp"
					name="endDateExp"
					value={endDateExp}
					onChange={handleEndDateExpChange}
				/>

				<label htmlFor="locationExp">Location</label>
				<input
					type="locationExp"
					id="locationExp"
					name="locationExp"
					value={locationExp}
					onChange={handleLocationExpChange}
				/>

				<label htmlFor="jobDescription">Location</label>
				<textarea
					className="job-description-box"
					id="jobDescription"
					name="jobDescription"
					value={jobDescription}
					onChange={handleJobDescriptionChange}
				/>
			</form>
		</div>
	);
}
