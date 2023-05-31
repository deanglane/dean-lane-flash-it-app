// App.js //

// Import: CSS
import './styles.css';

// Import: Pages
import NavBar from './pages/HomePage/NavBar';
import FlashIt from "./pages/HomePage/FlashIt.js";
import Register from './pages/Register/Register.js';
import Login from './pages/Login/Login.js';
import Build from './pages/Build/Build.js';
import Review from './pages/Review/Review.js';

// Modules
import {
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<FlashIt />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/build" element={<Build />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </>
  );
}

export default App;
