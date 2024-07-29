State (상태)
===
리액트 컴포넌트의 현재 상황을 나타내는 객체를 의미해요.    
변수와 달리 State는 변경되면 컴포넌트가 다시 랜더링 돼요.
```js
let [글제목, 글제목변경] = useState(['순정','액션','고어']);
```
`글제목`이라는 state를 만들고, 초기값으로 ['순정','액션','고어']를 부여했어요.    
state는 상태를 직접 수정할 수 없어요.   
setState 함수를 통해(여기서는 '글제목변경')을 통해 상태를 업데이트해요.   
* * *
Component (컴포넌트)
===
컴포넌트는 UI를 독립적이고 재사용 가능한 조각으로 나누는 방법이에요.
```js
function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
```
사용할 때에는, `<Modal><Modal/>` 혹은 `<Modal/>`로 사용해요.
* * *
JSX
===
JSX는 JavaScript를 확장한 문법으로, JavaScript XML의 줄임말이에요.   
HTML과 유사하게 생긴 코드를 JavaScript 안에서 사용할 수 있어요.
```js
return (
  <div className="App">
    <h4>{ post }</h4>
  </div>
);
```
이렇게 쓰면 JavaScript 코드 안에 HTML 태그를 직접 쓸 수 있어요.
* * *
Function (함수)
===
리액트 컴포넌트는 JavaScript 함수로 만들어져요.   
함수 안에 또 다른 함수를 만들어서 이벤트 처리나 UI 반환 등의 작업을 할 수 있어요.
```js
function 따봉누름(i){
  let copy = [...따봉];
  copy[i] = 따봉[i] + 1;
  따봉변경(copy);
}

<button onClick={() => 따봉누름(i)}>👍</button>
```
* * *
Array.map()
===
map() 함수는 배열의 각 요소에 대해 함수를 실행하고, 그 결과를 새로운 배열로 반환해요.   
리액트에서 리스트를 렌더링할 때 자주 사용해요.
```js
글제목.map(function(a, i){
  return (
    <div className='list' key={i}>
      <h4>{ a }</h4>
    </div>
  );
});
```
여기서 글제목 배열의 각 요소를 <div> 태그로 감싸서 화면에 보여줘요.
* * *
Conditional Rendering (조건부 렌더링)
===
리액트에서 조건부 렌더링을 사용하면 특정 조건에 따라 다른 UI를 보여줄 수 있어요.   
여기서는 삼항 연산자를 사용했어요.
```js
{
  modal == true ? <Modal/> : null
}
```
