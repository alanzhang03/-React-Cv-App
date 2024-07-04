import "../componentStyles/FormHeader.css";

export default function FormHeader() {
	return (
		<div className="form-header">
			<div className="form-header-container">
				<div className="clear-resume">
					<button className="clear-resume-button">
						🗑️Clear Resume
					</button>
				</div>
				<div className="load-example">
					<button className="load-example-button">
						Load Example
					</button>
				</div>
			</div>

		</div>
	);
}
