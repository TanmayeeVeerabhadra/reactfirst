import './App.css';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
// import React from "react";

// const App = () => {

// 	const onButtonClick = () => {
// 		fetch('SamplePDF.pdf').then(response => {
// 			response.blob().then(blob => {
// 				const fileURL = window.URL.createObjectURL(blob);
// 				let alink = document.createElement('a');
// 				alink.href = fileURL;
// 				alink.download = 'SamplePDF.pdf';
// 				alink.click();
// 			})
// 		})
// 	}
// 	return (
//     <>
// 				<h3>You are here to Download</h3>
// 				<h5>Click on below button to download PDF file</h5>
// 				<button onClick={onButtonClick}>
// 					Download PDF
// 				</button>
//     </>
// 	);
// };

// export default App;