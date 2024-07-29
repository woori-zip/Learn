import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // 서버에서 데이터를 가져왔다고 가정하고 진행
  // 자료를 잠깐 저장할 땐 변수 ( let | var | const )
  let post = 'OTT 콘텐츠 추천';
  // a : state에 보관했던 자료
  // b : state 변경을 도와주는 함수
  let [글제목, b] = useState(['순정','액션','판타지']);
  // 왜 state를 써야하나?
  // 변수와 달리 자동 재렌더링 됨

  return (
    <div className="App">
      {/* 1. class (X) className(O) */}
      <div className="pink-nav">
        {/* 3. Style 넣을 땐, { {스타일명:'값', ...} } */}
        <h4 style={ {fontSize: '16px', fontWeight: 'bold'} }>Blog</h4>
      </div>
      {/* 2. 데이터바인딩은 { 중괄호 } */}
      <h4>{ post }</h4>
      
      <div className="list">
        <h4>글제목</h4>
        <p>7월 29일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[0] }</h4>
        <p>7월 29일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>7월 29일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>7월 29일 발행</p>
      </div>
    </div>
  );
}

export default App;
