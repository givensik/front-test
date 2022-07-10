import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../route/Home';
import MyPage from '../route/MyPage';
import Infosec from '../route/Infosec';
import AboutUs from '../route/AboutUs';
import Freeart from '../route/Freeart';
import Page from '../route/Page';
import { dbService } from '../fbase';
import NaverCallback from '../route/NaverCallback';

function App() {
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
useEffect(() =>{
  getNweets();
  
 },[])
  
  
  return (
    <Router>
      <Routes>

            <Route exact path="/" element = {<Home />}/>
            <Route exact path="/infosec" element = {<Infosec/>}/>
            <Route exact path="/mypage" element = {<MyPage/>}/>
            <Route exact path="/aboutus" element = {<AboutUs/>}/>
            <Route exact path="/NaverCallback" element = {<NaverCallback/>}/>
            <Route exact path="/freeart" element = {<Freeart nweets={nweets}/>}/>
            
            {nweets && nweets.map((nweet) => {
              return(<Route id={nweet.id} exact path={`/freeart/${nweet.id}`} element = {<Page nweet={nweet}/>}/>)
            })}
         
       
      </Routes>
    </Router>
  );
}

export default App;
