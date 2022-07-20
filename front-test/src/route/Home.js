import React from 'react';
import {Link} from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { firebaseInstance } from '../fbase';
 import {authService} from "../fbase";

//const toggleAccount = () => setNewAccount((prev) => !prev)
import NaverLogin from 'react-naver-login';
import { useState } from 'react';
import LogOut from './LogOut';
import Auth from './Auth';
import Login from './Login';

import {useSelector, useDispatch} from 'react-redux';


const Home = (props) => {
  // console.log("Hello")
  // console.log(props.isLoggedIn)
  const login = useSelector((state)=>{ return state.login })
  console.log(login);
  const dispatch = useDispatch();


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
                <Link to='/infosec'>
                <Item>what is INFOSEC</Item>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to='/aboutus'>
                <Item>About Us</Item>
                </Link>
              </Grid>
              <Grid item xs={3}>
              <Link to='/freeart'>
                <Item>자유게시판</Item>
              </Link>
              </Grid>
              
                <Grid item xs={3}>
                
                    <Item>
                        {/* <button onClick={onSocilaClick} name="google">구글 로그인</button>
                        <NaverLogin 
                          clientId="Juptoue4aKw3paUHGszw"
                          callbackUrl="http://127.0.0.1:3000/NaverCallback"
                          render={(props) => <button onClick={props.onClick}>NaverLogin</button>}
                          onSuccess={(naverUser) => console.log(naverUser)}
                          onFailure={() => console.log("Error!")}
                        />
                        <LogOut></LogOut> */}
                        <Login isLoggedIn = {props.isLoggedIn}></Login>
                    </Item>
                
                </Grid>
                
              <Grid item xs={3}>
                
                <Item>
                  <div onClick={()=>{
                    dispatch({type : 'TOKEN_CREATE', login : 2})
                  }}>
                    +
                  </div>

                </Item>
                
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
           <Link to='/'>ALERT</Link>
           <Auth></Auth>
            <button>검색</button>
            <BasicGrid></BasicGrid>
            
            <footer>우리 정보</footer>



            
            
            
        </>
    )
}

export default Home;