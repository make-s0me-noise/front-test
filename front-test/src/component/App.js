import React, { useState } from 'react'
//import router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Routes
import Home from '../route/Home';
import MyPage from '../route/MyPage';
import Infosec from '../route/Infosec';
import AboutUs from '../route/AboutUs';
import Freeart from '../route/Freeart';
import Register from '../route/Register';

//import firebase
import { authService } from '../fbase';

function App() {
  //일단 이거 신경안쓰고 만들기
  const [isLoggedIn, setIsLoggedIn]=useState("givensik");//authService.currentUser
  console.log(isLoggedIn);

  
  if(isLoggedIn === null){
    console.log('no user');
    return (
      <Router>
        <Routes>
              <Route exact path="/" element = {<Home isLoggedIn={isLoggedIn} />}/>
              <Route exact path="/infosec" element = {<Infosec/>}/>
              <Route exact path="/aboutus" element = {<AboutUs/>}/>
              <Route exact path="/freeart" element = {<Freeart/>}/>
              <Route exact path="/register" element = {<Register/>}/>
         
        </Routes>
      </Router>
    );
  }else{
    console.log('Hello' + isLoggedIn);
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
}

export default App;
