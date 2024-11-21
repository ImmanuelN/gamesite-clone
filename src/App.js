import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import { AuthProvider } from './Context/AuthContext'; // Import AuthProvider
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Home/Home';
import AddGame from './Add_Game/AddGame';
import Login from './Login/Login';
import SignUp from './SignUp/signUp';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router> {/* Wrap everything inside Router */}
          <Layout /> {/* Render the Layout */}
        </Router>
      </AuthProvider>
    </div>
  );
};

const Layout = () => {
  const location = useLocation(); // Get current route
  const showNavBar = location.pathname !== '/login' && location.pathname !== '/sign-up'; // Check if path is not /login or /sign-up
  
  return (
    <>
      {showNavBar && <NavBar />} {/* Conditionally render NavBar */}
      
      <Routes> {/* Define Routes inside Layout */}
        <Route path='/' element={<Home />} />
        <Route path='/add-game' element={<AddGame />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
