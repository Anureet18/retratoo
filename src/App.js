import Homepage from "./pages/Homepage/Homepage";
import "./App.css"
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./pages/Log/Login";
import Register from "./pages/Register/Register";  
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Navbar from "./components/Navbar/Navbar";
import { Logout } from "./pages/Log/Logout";
import { Admin } from "./pages/Admin/Admin";
import { AdminUsers } from "./pages/Admin/AdminUsers";
import { AdminContacts } from "./pages/Admin/AdminContacts";

function App() {
  return (
   <>
     <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} /> 
        <Route path="/login" element={<><Navbar/><Login/><Footer/></>} />
        <Route path="/logout" element={<><Navbar/><Logout/></>} />  
        <Route path="/register" element={<><Navbar/><Register/><Footer/></>} /> 
        <Route path="/shoppingcart" element={<><Navbar/><ShoppingCart/></>} /> 
        <Route path="/admin" element={<Admin/>}>
           <Route path="users" element={<AdminUsers/>}/>
           <Route path="contacts" element={<AdminContacts/>} />
        </Route>
      </Routes>
     </Router>
   </>
  );
}

export default App;
