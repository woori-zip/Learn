/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'OTT 콘텐츠 추천';
  let [글제목, 글제목변경] = useState(['순정','액션','고어']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  function 따봉누름(i){
    let copy = [...따봉];
    copy[i] = 따봉[i]+1;
    따봉변경(copy);
  }

  function 제목바꿈(){
    let copy = [...글제목];
    copy[0] = '로맨스';
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="pink-nav">
        <h4 style={ {fontSize: '16px', fontWeight: 'bold'} }>Blog</h4>
      </div>
      <h4>{ post }</h4>

      <span onClick={()=>{ 제목바꿈() }}>
        순정 ➡️ 로맨스
      </span>

      <button onClick={()=>{
        let 가나다정렬 = [...글제목].sort();
        글제목변경(가나다정렬);
      }}>
        가나다순정렬
      </button>

      { 
        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{ 
                modal == false ? setModal(true) : setModal(false); 
                setTitle(i); 
              }}>
                { a }
              </h4>
              <span onClick={ () => { 따봉누름(i) } }>👍</span> { 따봉[i] }
              <p>7월 29일 발행</p>

            </div>
          )
        })
      }

      {
        modal == true ? <Modal title={title} 글제목={글제목} 제목바꿈={제목바꿈}/> : null
      }   

    </div>
  );
}

// 컴포넌트 만들기
function Modal(props) {
  return (
    <div className='modal' style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{props.제목바꿈()}}>글수정</button>
    </div>
  )
}

export default App;
