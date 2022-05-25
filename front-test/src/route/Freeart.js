import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {dbService} from "../fbase";

function Freeart()  {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const getNweets = async() =>{
    const dbNweets =  await dbService.collection("freeart").get()                   //서버(firebase)로부터 게시글이 저장되어있는 폴더를 연결한다
    dbNweets.forEach((document) => {
      const nweetObject = {
        ...document.data(),
        id: document.id,
      }
      
      setNweets((prev) => {
        
        return([nweetObject, ...prev])
      });
  });
};
  useEffect(() =>{
   getNweets();
   console.log(nweets);
  },[])
  return (
      <>
    <Link to='/'>ALERT</Link>
    <div>자유게시판</div>
    <div>{nweets && nweets.map(nweet => 
    <div key={nweet.id}>
      <h4>{nweet.title}</h4>
      {nweet.text};
    </div>
    )}</div>
    </>
  )
}

export default Freeart