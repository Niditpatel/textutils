import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './Alert';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // whethere dark mode is enablesd or not
  const [alert, setAlert] = useState(null)
   const showalert =(messege ,type) =>{
        setAlert({
          msg : messege ,
          type : type
        })
        setTimeout(() => {
          setAlert(null)
        }, 1000);
   }
    const toggleMode = () =>{
    if(mode === 'light'){
       setMode('dark')
       document.body.style.backgroundColor = '#042743';
       showalert('Dark mode enabled','success');
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showalert('Light mode enabled','success');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="AboutUs" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze :" showalert={showalert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>  
  );
}

export default App;
