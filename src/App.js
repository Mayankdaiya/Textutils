import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/textform';
import Alert from './Components/Alert';
import { useState } from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#40434E';
      document.title = 'Textutils - Darkmode';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setmode('light');
      document.body.style.backgroundColor = '#C7EBF0';
      document.title = 'Textutils - Home';
      showAlert('Light mode has been enables', 'success');
    }
  }
  return (
    <>
    <Router basename='/textutils'>
      <Navbar title="Textutils" abouttxt="About" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes> 
          <Route path="/about" element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<Textform heading='Enter the text to analyze' mode={mode} fun={showAlert} />}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;



// npx create-react-app textutils