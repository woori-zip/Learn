/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState, useTransition } from 'react';

function App() {

  let post = 'OTT 콘텐츠 추천';
  let [글제목, 글제목변경] = useState(['순정','액션','고어']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [날짜, 날짜변경] = useState(['2024-07-29','2024-07-29','2024-07-29']);

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
                {/* 이벤트 버블링을 막으려면 e.stopPropagation() */}
                <span onClick={ (e) => { e.stopPropagation(); 따봉누름(i) } }>👍</span> { 따봉[i] }
              </h4>
              <p>{날짜[i]} 발행</p>
              <button onClick={()=>{
                let 글제목copy = [...글제목];
                글제목copy.splice(i, 1); // i번째 항목 제거
                글제목변경(글제목copy);
                let 날짜copy = [...날짜];
                날짜copy.splice(i, 1);
                날짜변경(날짜copy);
                let 따봉copy=[...따봉];
                따봉copy.splice(i, 1);
                따봉변경(따봉copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      
      <input
        value={입력값}
        onChange={(e)=>{ 입력값변경(e.target.value); console.log(입력값) }}
      />
      <button onClick={()=>{
        if(입력값!=='') {
          let 글제목copy = [...글제목];
          글제목copy.unshift(입력값);
          글제목변경(글제목copy);
          let 오늘날짜 = new Date().toISOString().split('T')[0];
          let 날짜copy = [...날짜];
          날짜copy.unshift(오늘날짜);
          console.log(날짜copy);
          날짜변경(날짜copy);
          let 따봉copy = [0, ...따봉];
          따봉변경(따봉copy);
          입력값변경(''); // 입력 필드 초기화
        }
      }}>작성</button>

      {
        modal == true 
        ? <Modal title={title} 글제목={글제목} 날짜={날짜} 제목바꿈={제목바꿈}/> 
        : null
      }

    </div>
  );
}

// 컴포넌트 만들기
function Modal(props) {
  return (
    <div className='modal' style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>{props.날짜[props.title]}</p>
      <p>상세내용</p>
      <button onClick={()=>{props.제목바꿈()}}>글수정</button>
    </div>
  )
}

export default App;
