import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import ContactUs from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <Router>
      <Header title={"Images Gallery"}/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<ContactUs />} />  
    </Routes>
    </Router>
  );
}

export default App;
