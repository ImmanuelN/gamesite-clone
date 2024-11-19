import React from 'react';
import { NavBar} from "./components";
import "./App.css";
import Home from './Home/Home';
import AddGame from './Add_Game/AddGame';
import Login from './Login/Login';
import SignUp from './SignUp/signUp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
      <Router>
        <div className="App">
          <NavBar className="navbar" />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/add-game' element={<AddGame />} />
              <Route path='/login' element={<Login />} />
              <Route path='/sign-up' element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

export default App;