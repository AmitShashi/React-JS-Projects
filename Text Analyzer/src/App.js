import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { setAlert(null); }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#29183f";
      showAlert(" Dark mode", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode", "success");
    }
  }
  return (
    <>
      <BrowserRouter>

        <Navbar title="Word-Analyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">

          <Routes>

            <Route exact path="/about" element={<About mode={mode}/>}> </Route>

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter text to convert' mode={mode} />}> </Route>

          </Routes>

        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
