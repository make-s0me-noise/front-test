import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../route/Home';
import MyPage from '../route/MyPage';

function App() {
  return (
    <Router>
      <Routes>
        
            <Route exact path="/" element = {<Home/>}/>
            
            <Route exact path="/mypage" element = {<MyPage/>}/>
         
       
      </Routes>
    </Router>
  );
}

export default App;
