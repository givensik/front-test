import React from 'react'
import { useState } from 'react'
import {useCookies} from 'react-cookie'; 


function LogOut(props) {
  
  const [login, setLogin] = useState(props.isLoggedIn);
  // console.log("로그아웃 컴포넌트임");
  console.log(login);
  // console.log(document.cookie);
  const [, , removeCookie] = useCookies('token');
  if(login === false){
    removeCookie('tokenid')
    setLogin(null)
    document.location.reload();
  }


  return (
    <div>
      <button  onClick = {(event)=>{
        setLogin(false)
      }}>LogOut</button> 
      
    </div>
  )
}

export default LogOut;