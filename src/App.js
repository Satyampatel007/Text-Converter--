
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";



function App() {
   const [mode, setMode] = useState('light');// This is the show to enable the mode

   const [alert,setAlert] = useState(null);

   const showAlert= (message,type) =>{
       setAlert({
        msg: message ,
        type: type
       })
      setTimeout(() =>{
        setAlert(null);
      }, 3000);
   }
  //  const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //  }

   const togglemode =(cls) =>{
    //removeBodyClasses();
    //console.log(cls)
    //document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='rgb(30 40 105)';
      showAlert("Dark mode has been enabled", "success");
     // document.title = ("Textutile - Dark mode");
      // setInterval(() => {
      //   document.title = ("Install this is app");
      // }, 2000);
      // setInterval(() => {
      //   document.title = ("this is app very secure");
      // }, 1500);
    }
    else{
      setMode('light');
      
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
     // document.title = ("Textutile - Light mode");
    }
   }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
     
      <div className="container my-3">
      <Routes>
{/*
        /user ----> component 1
        /user/home ---> component 2 */}
          <Route exact path="/about"  element={ <About mode={mode}/>}>
          {/* <About/> */}
           
          </Route>
          <Route exact path="/" element={ <TextForm heading="try textutile - word counter , character counter , remove extraspaces" showAlert={showAlert} mode={mode}/>}>
          {/* <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/> */}
         
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
