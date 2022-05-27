import React from 'react'
import { Link } from 'react-router-dom'

//mui
import Button from '@mui/material/Button';
import { yellow } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



function Register() {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
  }));
  return (
      <Container fixed >
        <Grid>
        <Item>
            <h1>
              <Link to='/'>ALERT</Link>
            </h1>
            
            <div >Register Page</div>
          </Item>
        </Grid>
        <Grid  alignItems="center">
          <Item>
            <br></br>
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
          </Item>
          
        </Grid>
        
      


      </Container>
  )
}

export default Register