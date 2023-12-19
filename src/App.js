/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let post = "강남 우동 맛집";
  let [title,setTitle] = useState(['운동하기','영어 습득하기','리액트 학습하기']);
  let [num, setNum] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [input,setInput] = useState('');
 
  const today = new Date();
  let year = today.getFullYear().toString().slice(-2);
  let month = today.getMonth()+1;
  let date = today.getDate();

  return (
    
    <div className="App">
       <div className="black-nav">
          <h4 style={{fontSize : '18px'}}>CheckList</h4> 
        </div>

        {/* <button onClick={()=>{
            let copy = [...title];
            copy.sort();
            setTitle(copy);
        }}>가나다순 정렬</button> */}

        {/* <button onClick={()=>{
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          setTitle(copy);
        }}>수정</button> */}

        {/* <div className='list'>
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
          <h4 onClick={()=>{
            setModal(!modal);
          }}>{title[2]}</h4>
          <p>{year}년 {month}월 {date}일 발행</p>
        </div> */}
          
        {
          title.map((titleName, i)=>{
            return (
              <div className='list' key={i}>
                <h4 onClick={()=>{
                  //setModal(true);
                  setModal(!modal)
                  setModalTitle(i);
                }}>{title[i]}
                  <span onClick={(e)=>{
                    // 좋아요를 클릭시 모달창에 안띄게 이벤트버블링 막기 stopPropagation()
                      e.stopPropagation();
                      let copy = [...num];
                      copy[i] = copy[i] + 1;
                      setNum(copy);
                  }}>👍</span> {num[i]}
                </h4>
                <p>{year}년 {month}월 {date}일 발행</p>
                <button className='delete' onClick={()=>{
                  let copy = [...title];
                  copy.splice(i,1);
                  setTitle(copy);
                }}>삭제</button>
              </div>
            )
          })
        }

        <input onChange={(e)=>{
          setInput(e.target.value);
          console.log(input);
        }}/>
        <button className='add' onClick={()=>{
          let copy = [...title];
          copy.unshift(input);
          setTitle(copy);
        }}>추가</button>

        {/* <button onClick={()=>{setModalTitle(0)}}>글제목0</button>
        <button onClick={()=>{setModalTitle(1)}}>글제목1</button>
        <button onClick={()=>{setModalTitle(2)}}>글제목2</button> */}

        {/* <div className='modal'>
          <h4>제목</h4>
          <p>{month}월 {date}일 발행</p>
          <p>상세내용</p>
        </div> */}

        { modal == true ?  <Modal title = {title} modalTitle = {modalTitle} year={year} month={month} date={date} /> : null }
 
    </div>
  );
}


 
function Modal(props){
  
  return(
    <>
      <div className='modal'>
        <h4>{props.title[props.modalTitle]}</h4>
        <p>{props.year}년 {props.month}월 {props.date}일</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    </>
  )
}

export default App;
