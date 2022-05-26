import React from 'react'
import { Link } from 'react-router-dom'

function Page({nweet}) {
  return (
    <>
    <Link to='/'>ALERT</Link>
    
    
    <div key={nweet.id}>
      <h4>{nweet.title}</h4>
      <img src={nweet.image}/>
      <br/>
      {nweet.text};
    
    </div>
    </>
  )
}

export default Page