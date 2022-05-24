import React from 'react';
import {Link} from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
 



const Home = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(8),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    function BasicGrid()  {
        return (
          <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={5}>
              <Grid item xs={3}>
                <Item>what is INFOSEC</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>About Us</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>자유게시판</Item>
              </Grid>
              
                <Grid item xs={3}>
                
                    <Item>
                        <button>구글 로그인</button>
                        <button>네이버 로그인</button>
                        <button>카카오 로그인</button>
                    </Item>
                
                </Grid>
              
              <Grid item xs={3}>
                <Link to='/mypage'>
                <Item>대외활동</Item>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Item>절찬 모집중</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>취업게시판</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>지금 모집중인 회사</Item>
              </Grid>
            </Grid>
          </Box>
        );
      }
    return(
        <>
            <h2>ALERT</h2>
            
            <button>검색</button>
            <BasicGrid></BasicGrid>
            
            <footer>우리 정보</footer>



            
            
            
        </>
    )
}

export default Home;