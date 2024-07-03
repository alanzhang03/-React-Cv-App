import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import FormHeader from "./FormHeader";
import "../componentStyles/Form.css";

export default function Form() {
	return (
		<div className="form">
			<FormHeader></FormHeader>
			<Personal></Personal>
			<Education></Education>
			<Experience></Experience>
		</div>
	);
}
