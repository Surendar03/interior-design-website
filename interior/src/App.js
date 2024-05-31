import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import FAQs from "./components/FAQs";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/Aboutus' element={<Aboutus></Aboutus>}/>
        <Route path='/Projects' element={<Projects></Projects>}/>
        <Route path='/Contact' element={<Contact></Contact>}/>
        <Route path='/Services' element={<Services></Services>}/>
        <Route path='/FAQs' element={<FAQs></FAQs>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
