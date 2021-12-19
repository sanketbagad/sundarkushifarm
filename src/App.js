import './App.css';
import BasicTabs from './Components/Header';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { Container } from 'react-bootstrap';
import Login from './Screens/Login';
import HomeScreen from './Screens/HomeScreen';
import SignUp from './Screens/SignUp';

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
    </Routes>
   </Container>
   </Router>
     
    </>
   
  );
}

export default App;
