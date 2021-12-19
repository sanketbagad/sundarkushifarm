import './App.css';
import BasicTabs from './Components/Header';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { Container } from 'react-bootstrap';
import Login from './Screens/Login';
import HomeScreen from './Screens/HomeScreen';
import SignUp from './Screens/SignUp';
import AddProduct from './Screens/AddProduct';
import AddCustomer from './Screens/AddCustomer';

function App() {
  return (
    <>
    <Router>
    <NavBar />
   <Container>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/addCustomer" element={<AddCustomer />} />
    </Routes>
   </Container>
   </Router>
     
    </>
   
  );
}

export default App;
