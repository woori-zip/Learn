/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'OTT 콘텐츠 추천';
  let [글제목, 글제목변경] = useState(['순정','액션','고어']);
  let [따봉, 따봉변경] = useState(0);

  function 함수(){
    따봉변경(따봉+1);
  }

  return (
    <div className="App">
      <div className="pink-nav">
        <h4 style={ {fontSize: '16px', fontWeight: 'bold'} }>Blog</h4>
      </div>
      <h4>{ post }</h4>

      <span onClick={()=>{
        let copy = [...글제목];
        copy[0] = '로맨스';
        글제목변경(copy);
      }}>
        순정 ➡️ 로맨스
      </span>
      
      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ 함수 }>👍</span> {따봉} </h4>
        <p>7월 29일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] } <span onClick={ function() {따봉변경(따봉+1);} }>👍</span> {따봉} </h4>
        <p>7월 29일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] } <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
        <p>7월 29일 발행</p>
      </div>

    </div>
  );
}

export default App;
