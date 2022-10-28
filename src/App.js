import './App.css';
import DigiClock from './components/DigiClock';
import ViewItems from './components/ViewItems-useState';
import AxiosDemo from './components/AxiosDemo'
import Demo from './components/Demo'

function App() {
  return (
    <div className="App">
      <Demo/>
    </div>
  );
}
export default App;
// import "./styles.css";
// import React from 'react';
// import BlogContextDemo from './components/BlogContextDemo'

// const blogInfo = {
//   React: {
//     post: "Learn useContext Hooks",
//     author: "Varun K"
//   },
//   NodeJS: {
//     post: "Node Commands",
//     author: "Veena M"
//   }
// };

// export const BlogContext  = React.createContext(blogInfo);

// export default function App() {
//   return (
//     <div className="App">
//       <div>
//       <h1>Hello KP</h1>
//       <BlogContext.Provider value={blogInfo}>
//            <BlogContextDemo />
//       </BlogContext.Provider>
//       </div>
//     </div>
//   );
// }


// import React, {useState} from 'react';
// function App() {
// 	const [height,setHeight] = useState(0);
//   const [weight, setWeight] = useState(0);
//   const [name, setName] = useState("");
 

//    const calculateBMI  = ()=> {

//       var heightSquared = (height/100  * height/100);
//       var bmi = weight / heightSquared;
          
//       if( bmi < 16)
//           window.alert("Hi.."+name+"...You are completely UnderWeight (Severe Thinner)");
//       else
//       if( bmi >=16 && bmi < 17)
//           window.alert("Hi.."+name+"...You are Moderately UnderWeight (Moderate Thinner)");
//       else
//       if( bmi >=17 && bmi < 18.5)
//           window.alert("Hi.."+name+"...You are little UnderWeight (Mild Thinness)");
//       else
//       if( bmi >= 18.5  && bmi <= 24.99 ){
//           window.alert("Hi.."+name+"...You are in a healthy weight range");
//       }
//       else if(bmi >= 25 && bmi <= 29.9){
//         window.alert("Hi.."+name+"...You are overweight");
//       }
//       else if(bmi >= 30){
//         window.alert("Hi.."+name+"...You are obese");
//       }
//       else if(bmi < 18.5){
//         window.alert("Hi.."+name+"...You are under weight");
//       }    
//       bmi = Math.round(bmi * 100) / 100;  
//   }

//   const submitMe = (e) =>{
//      e.preventDefault();
//      calculateBMI();
//   }  
  
//   const handleName = (e) =>{
//     setName(e.target.value);
//   }
//   const handleHeight = (e) =>{
//     setHeight(e.target.value);
//   }
//   const handleWeight = (e) =>{
//     setWeight(e.target.value);
//   }
  
//   return (
//       <div className="App">
//           <h1>BMI Calculator</h1>
//           <form onSubmit={submitMe}>
//             <label>
//               Please enter your name
//             </label>
//             <input type="text" name="name" value={name} onChange={handleName}/>
//              <br/><br/>
//              <label>
//              Enter your height in cm: 
//             </label>
//             <input type="text" name="height" value={height} onChange={handleHeight}   />
//              <br/><br/>
//              <label>
//              Enter your weight in kg : 
//             </label>
//             <br/>
//             <input type="text" name="weight" value={weight} onChange={handleWeight}/>
//             <br/>
//             <br/>
//             <input type="submit" value="Submit"/>
//           </form>
      
//       </div>
//     );
//   }

// export default App;

