import Home from "./pages/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";
import { Content } from "./components/Content";


function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/about" element={<Content />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </Router> 
    </div>
  );
}

export default App;
