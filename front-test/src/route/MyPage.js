import React, { useState }from 'react';
import { Link } from 'react-router-dom'
//mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//import GridBa
import BasicGrid from './BasicGrid';

const MyPage = () => { 
    const [isLoggedIn, setIsLoggedIn] = useState("givensik");
    console.log("Hello "+isLoggedIn );
    function BasicGrid() {
        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            ...theme.typography.body2,
            padding: theme.spacing(4),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          }));
    
      return (
            <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Item>
                        <h1>
                            <Link to='/'>ALERT</Link>
                        </h1>
                    </Item>
                </Grid>
                <Grid item xs={3} >
                    <Item>Profile Image</Item>
                </Grid>
                <Grid item xs={9}>
                    <Item>
                        Profile
                        <br></br>
                        hello
                    </Item>
                </Grid>
                
                  
                <Grid item xs={3}>
                    
                    <Item>내가 쓴글</Item>
                    
                  </Grid>
                  <Grid item xs={3}>
                    <Item>
                        <div>학교 인증(일단 인증 안한거로)</div>
                            <button>Authentication</button>
                        </Item>
                  </Grid>
                  <Grid item xs={3}>
                    <Item>몰라</Item>
                  </Grid>
                  <Grid item xs={3}>
                    <Item>몰라</Item>
                  </Grid>
                </Grid>
              </Box>
      )
    }
    return(
        <>
        
        <div>mypage</div>
        <BasicGrid></BasicGrid>
        </>
    )
}

export default MyPage;