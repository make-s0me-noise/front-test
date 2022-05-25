import React from 'react'
import { Link } from 'react-router-dom'

//mui
import Button from '@mui/material/Button';
import { yellow } from '@mui/material/colors';
import Container from '@mui/material/Container';


function Register() {
  return (
    <Container fixed>
    <Link to='/'>ALERT</Link>
    <div>Register Page</div>
    <div>
      <Button variant="contained" color = "success" onClick ={
        () =>{
          alert('Naver 회원 가입 히히');
        }
      }>Naver로 회원가입</Button>
    </div>
    <br></br>
    <div>
      <Button variant="contained" onClick ={
        () =>{
          alert('kakao 회원 가입 히히');
        }
      } >Kakao로 회원가입</Button>
    </div>
    


    </Container>
  )
}

export default Register