import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Page({nweet}) {
  console.log(nweet.comment)
  return (
    <>
    <Link to='/'>ALERT</Link>
    
    
    <div>
      <h3>{nweet.title}</h3>
      <div id={nweet.id}></div>
        <div>{nweet.image && Object.values(nweet.image).map((value) =>
        <div><img src={value} height="280" width="210"/></div> 
        )}</div>
      <br/>
      <div>{nweet.text}</div>
      
      <p><div><h4>댓글</h4></div></p>
      <div>{nweet.comment && Object.values(nweet.comment).map((value) =>{
        console.log(value)
        return(
        <>
          <hr></hr>
          <h5>{value.user}</h5>
          <div>{value.content}</div>
        </> 
        )})}<hr></hr></div>
    </div>
  
    </>
  )
}

export default Page;