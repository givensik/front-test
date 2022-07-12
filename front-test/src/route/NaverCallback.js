import React from 'react'
import { useCookies } from 'react-cookie';
import {Link} from 'react-router-dom'

function NaverCallback() {

  const token = window.location.href.split('=')[1].split('&')[0];

  const [cookies, setCookie, removeCookie] = useCookies(['token']);
    console.log(cookies.token)

    if(token){
        setCookie('tokenid',token)
        console.log("yes..")
    }else{
        console.log("no..")
    }
  
  return (
    <div>
      <div>
        로그인 성공
      </div>
      <div>
        창을 닫고 원래 페이지로 돌아가세요
      </div>

    </div>
  )
}

export default NaverCallback