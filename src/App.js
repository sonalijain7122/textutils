import React from "react";
import { useState } from 'react';
// import About from './components/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
  
// } from "react-router-dom";


function App() {
  const [mode , setmode] = useState('light');  // dark mode enable or not
  const [alert , setalert] = useState(null);

const showAlert = (message,type)=>{
  setalert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setalert(null);
  }, 1500);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.background = '#1d2b40';
      showAlert("Dark mode has been enabled" , "success");
    }
    else{
      setmode ('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled" , "success");
    }
  }

  return (
    <>  
    {/* <Router> */}
 <Navbar title="TextUtils" aboutText="About " mode={mode} toggleMode={toggleMode} />
 <Alert  alert={alert}/>
 <div className="container my-3">

 {/* <Routes> 
  
  <Route exact path="/about" element={<About/>}>
    
  </Route> */}
  
  {/* <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter text to analyze" className="my-3" mode={mode}/>}>
  
  </Route> */}
  <TextForm  showAlert={showAlert} heading="Enter text to analyze" className="my-3" mode={mode}/>
 
 {/* </Routes> */}
 </div>
 {/* </Router> */}
    </>
  );
 }
export default App;




