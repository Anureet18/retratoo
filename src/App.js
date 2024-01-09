import Homepage from "./pages/Homepage/Homepage";
import "./App.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";  
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
   <>
     <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} /> 
        <Route path="/login" element={<><Navbar/><Login/></>} /> 
        <Route path="/register" element={<><Navbar/><Register/></>} /> 
        <Route path="/shoppingcart" element={<><Navbar/><ShoppingCart/></>} /> 
      </Routes>
     </Router>
   </>
  );
}

export default App;
