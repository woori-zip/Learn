import logo from './logo.svg';
import './App.css';

function App() {

  // 서버에서 데이터를 가져왔다고 가정하고 진행
  let post = '여름 냄새나는 애니메이션 추천';

  return (
    <div className="App">
      {/* 1. class (X) className(O) */}
      <div className="pink-nav">
        {/* 3. Style 넣을 땐, { {스타일명:'값', ...} } */}
        <h4 style={ {fontSize: '16px', fontWeight: 'bold' } }>Blog</h4>
      </div>
      {/* 2. 데이터바인딩은 { 중괄호 } */}
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
