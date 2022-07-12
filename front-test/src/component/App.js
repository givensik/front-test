import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../route/Home';
import { dbService } from '../fbase';
import NaverCallback from '../route/NaverCallback';

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [log,setlog] = useState(false);
  const [nweets, setNweets] = useState([]);
  const getNweets = async() =>{
    const dbNweets =  await dbService.collection("freeart").get()                   //서버(firebase)로부터 게시글이 저장되어있는 폴더를 연결한다
    dbNweets.forEach((document) => {
      const nweetObject = {
        ...document.data(),
        id: document.id,
      }
      
      setNweets((prev) => {
        return([nweetObject, ...prev])
      });
  });
};


useEffect(() => {
  if(document.cookie){
    setLogin(true);
    console.log(document.cookie);
  }else{
    setLogin(false);
  }
}, []);

 
  
  
  return (
    <Router>
      <Routes>

            <Route exact path="/" element = {<Home isLoggedIn ={isLoggedIn}/>}/>
            <Route exact path="/NaverCallback" element = {<NaverCallback/>}/>
          
         
       
      </Routes>
    </Router>
  );
}

export default App;
