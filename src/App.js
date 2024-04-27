import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes,useLocation} from "react-router-dom";
import Header from './component/Header';
import Singup from './component/Singup';
import Login from './component/Login';
import Card from './component/Card';
import Home from './component/Home';
import Product from './component/Product';
import About from './component/About';
import Footer from './component/Footer';
import Dashbord from './component/Dashbord';
import Headerd from './component/Headerdash';
import CustomHeader from './component/CustumHead';
function App() {
 
  return (
    <div className="App">
        <BrowserRouter>
        <CustomHeader />
        <div>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/singup" element={<Singup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/card" element={<Card />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/footer" element={<Footer />}/>
          <Route path="/dashboard" element={<Dashbord />}/>
        </Routes>
           </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
