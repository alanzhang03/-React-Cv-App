import "../componentStyles/Personal.css";

export default function Personal() {
	return (
		<div className="personal">
			<form className="personal-details-form">
				<h1>Personal Details</h1>

				<label for="fullName">Full Name</label>
				<input type="text" id="fullName" name="fullName" defaultValue="Alan Zhang" required></input>

				<label for="email">Email</label>
				<input type="email" id="email" name="email" defaultValue="alan.s.zhang@gmail.com"></input>

				<label for="phone">Phone Number</label>
				<input type="tel" id="phone" name="phone" defaultValue="+1 484-860-0997"></input>

				<label for="address">Address</label>
				<input type="text" id="address" name="address" defaultValue="Philadelphia, Pennsylvania"></input>
			</form>
		</div>
	);
}
