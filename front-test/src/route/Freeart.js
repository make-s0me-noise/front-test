import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {dbService} from "../fbase";

function Freeart({nweets})  {
 

  
  return (
      <>
    <Link to='/'>ALERT</Link>
    <div>자유게시판</div>
    <div>{nweets && nweets.map(nweet => 
    <div key={nweet.id}>
      <Link to={`/freeart/${nweet.id}`}><h4>{nweet.title}</h4></Link>
     
    </div>
    )}</div>
    </>
  )
}

export default Freeart