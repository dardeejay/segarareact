import {BrowserRouter as Router } from 'react-router-dom';
import NavBar from './pages/navbar'
import Messenger from './pages/messenger'
import AnimatedPage from './pages/AnimatedPage';
function App() {
  return (
    <Router>
      <NavBar />
        <AnimatedPage/>
      <Messenger />
    </Router>
  );
}

export default App;
