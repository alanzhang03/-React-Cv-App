import Footer from "./components/Footer";
import Form from "./components/formInfo/Form";
import "./assets/styles/App.css";
import Resume from "./components/resume/Resume";

function App() {
	return (
		<div className="App">
			<div className="content-container">
				<Form></Form>
				<Resume></Resume>
			</div>

			<Footer></Footer>
		</div>
	);
}

export default App;
