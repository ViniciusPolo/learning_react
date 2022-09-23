import { BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css';
import Footer from './components/layouts/Footer';

import NavBar from './components/layouts/NavBar';
import RouterTo from './RouterTo';

function App() {
  return (
    <Router className="App">
      <NavBar />
      <RouterTo />
      <Footer />
    </Router>
  );
}

export default App;
