/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let post = "강남 우동 맛집";
  let [title,setTitle] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [num, setNum] = useState(0);


  const today = new Date();
  let year = today.getFullYear().toString().slice(-2);
  let month = today.getMonth()+1;
  let date = today.getDate();
 
  return (
    <div className="App">
       <div className="black-nav">
          <h4 style={{fontSize : '18px'}}>CheckList</h4> 
        </div>

        <button onClick={()=>{
          
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          setTitle(copy);

        }}>수정</button>
        <div className='list'>
          <h4>
            {title[0]} 
          <span onClick={()=>{setNum(num+1)}}>👍</span> {num} </h4>
          <p>{year}년 {month}월 {date}일 발행</p>
        </div>
 
        <div className='list'>
          <h4>{title[1]}</h4>
          <p>{year}년 {month}월 {date}일 발행</p>
        </div>
        <div className='list'>
          <h4>{title[2]}</h4>
          <p>{year}년 {month}월 {date}일 발행</p>
        </div>
        
    </div>
  );
}

export default App;
