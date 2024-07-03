import "../componentStyles/FormComp.css";

export default function Personal() {
	return (
		<div className="personal">
			<form className="personal-details-form">
				<h1>Personal Details</h1>

				<label for="fullName">Full Name</label>			
				<input type="text" id="fullName" name="fullName"></input>
			

				<label for="email">Email</label>
				<input type="email" id="email" name="email"></input>		

				<label for="phone">Phone Number</label>
				<input type="tel" id="phone" name="phone"></input>
		

				<label for="address">Address</label>
				<input type="text"></input>
			</form>
		</div>
	);
}
