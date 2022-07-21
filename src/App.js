import {BrowserRouter as Router } from 'react-router-dom';
import NavBar from './pages/navbar'
import Messenger from './pages/messenger'
import AnimatedPage from './pages/AnimatedPage';
import Footer from './pages/footer';

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatedPage/>
      <Footer/>
      <Messenger />

    </Router>
  );
}

export default App;
