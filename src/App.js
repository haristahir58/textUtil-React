import './App.css';
import './TextForm.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Quiz3 from './components/Quiz3';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled","success")
      document.title = 'TextUtils-Dark'
      // setInterval(() => {
      //   document.title = 'Download TextUtils'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing'
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success")
      document.title = 'TextUtils-Light'
    }
  };


  return (
    <>
    <Router>
   <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>

   <div className="container my-3" >
   
    <Routes>
   <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter The Text To Analyze' mode={mode} />}></Route>

   <Route exact path="/about" element={<About/>}> </Route>
   <Route exact path="/quiz3" element={<Quiz3/>}> </Route>


   </Routes>
   </div>
   
   </Router>
   </>
  );
}

export default App;
