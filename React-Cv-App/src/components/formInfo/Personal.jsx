import "../componentStyles/FormComp.css";

export default function Personal() {
	return (
		<div className="personal">
			<form>
                <h1>Personal Details</h1>
                
                <label for="fullName">Full Name</label>
                <input type="text" id="fullName"></input>
			</form>
		</div>
	);
}
