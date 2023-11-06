import React from "react";
import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom";
import Admin from './admin/admin.js';
import User from './user/user.js'
import Login from './login/login.js';

const url = "mongodb+srv://harishchoudhary2606:M29x8MglXGuMLWAn@cluster0.hd7xw6r.mongodb.net/"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin"
            element={<Admin />} />
          <Route path="/user"
            element={<User />} />
        </Routes>
      </Router>
      {/* <Login />
      <Admin />
      <User /> */}
    </>
  );
}

export default App;
