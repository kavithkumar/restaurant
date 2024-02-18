import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Navb from './pages/navbar';
import { useState } from "react";
import Login from './pages/login';
import Logout from './pages/logout';
function App() {
  let [username,setUsername]=useState('')
  return (
    <div>
      {/* <Navb username={username}/> */}
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUsername={setUsername}/>} />
          
          <Route path="/logout" element={<Logout setUsername={setUsername}/>}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
