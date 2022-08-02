import {BrowserRouter as Router } from 'react-router-dom';
import NavBar from './pages/navbar'
import Messenger from './pages/messenger'
import AnimatedPage from './pages/AnimatedPage';
import Footer from './pages/footer';

function App() {
  return (
    <Router>
      <Messenger />
      <NavBar />
      <AnimatedPage/>
      <Footer/>
      
    </Router>
  );
}

export default App;
