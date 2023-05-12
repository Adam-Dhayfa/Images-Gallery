import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import ContactUs from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import LogIn from "./pages/Login";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Header title={"Images Gallery"}/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Log_In" element={<LogIn/>}/>
        <Route path="/Contact" element={<ContactUs />} />  
    </Routes>
    </Router>
  );
}

export default App;
