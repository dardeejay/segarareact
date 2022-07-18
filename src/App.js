import {BrowserRouter as Router } from 'react-router-dom';
import NavBar from './pages/navbar'

import AnimatedPage from './pages/AnimatedPage';
function App() {
  return (
    <Router>
      <NavBar />
        <AnimatedPage/>
    </Router>
  );
}

export default App;
