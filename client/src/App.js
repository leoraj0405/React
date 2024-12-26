import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';


function App() {

  const [loggedUser, setLoggedUser] = useState({
    isLogged: false,
    userName: '',
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login setLoginUser={setLoggedUser} />} />
          <Route element={<Layout setLoginUser={setLoggedUser} />}>
            <Route path='home' element={<Home loggedInfo={loggedUser} />} />
            <Route path='about' element={<About loggedInfo={loggedUser} />} />
          </Route>
        </Routes>
      </BrowserRouter>    </>
  );
}

export default App;
