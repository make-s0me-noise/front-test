import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../route/Home';
import MyPage from '../route/MyPage';
import Infosec from '../route/Infosec';
import AboutUs from '../route/AboutUs';
import Freeart from '../route/Freeart';

function App() {
  return (
    <Router>
      <Routes>
        
            <Route exact path="/" element = {<Home/>}/>
            <Route exact path="/infosec" element = {<Infosec/>}/>
            <Route exact path="/mypage" element = {<MyPage/>}/>
            <Route exact path="/aboutus" element = {<AboutUs/>}/>
            <Route exact path="/freeart" element = {<Freeart/>}/>
         
       
      </Routes>
    </Router>
  );
}

export default App;
