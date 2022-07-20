import React from 'react'
import NaverCallback from '../route/NaverCallback';
import NaverLogin from 'react-naver-login';
import LogOut from './LogOut';
import loginButton from 'react-naver-login'
import { ReactDOM } from 'react';

import {useSelector} from 'react-redux';


function Login(props) {
    // console.log(props.isLoggedIn)
    
    
    return (
        <>
        {props.isLoggedIn ? (<div>
            
            <LogOut ></LogOut>
        </div>) : (<div>
            <button name="google">구글 로그인</button>
            <div>
                <NaverLogin 
                    clientId="Juptoue4aKw3paUHGszw"
                    callbackUrl="http://127.0.0.1:3000/NaverCallback"
                    render={(props) =><button onClick={
                        props.onClick
                    }>NaverLogin</button>}
                    onSuccess={() => console.log("Good") }
                    onFailure={() => console.log("Error!")}
                                
                />
            </div>
                
        </div>) }
        </>
      );
}

export default Login