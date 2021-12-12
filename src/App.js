import './App.css';
import BasicTabs from './Components/Header';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import { Container } from 'react-bootstrap';
import Login from './Screens/Login';

function App() {
  return (
    <>
    <Router >
    <NavBar />
   <BasicTabs />
   <Container>
    <Route path="/login" exact component={Login} />
   </Container>
    </Router>
     
    </>
   
  );
}

export default App;
