import React from 'react'

function Auth() {
    let content = ""
    if(document.cookie){
        content = "Hello User!"
    }else{
        content = "Login Please"
    }
  return (
    <div>{content}</div>
  )
}

export default Auth