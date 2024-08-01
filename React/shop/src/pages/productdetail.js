import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let ColorBtn = styled.button`
  background : ${ props => props.bg };
  border : none;
  border-radius : 10px;
  color : ${ props => props.bg == 'skyblue' ? 'black' : 'white'};
  padding : 10px;
`

function ProductDetail(props) {

  let {id} = useParams();
  let 찾은상품 = props.anime.find(function(x){
    return x.id == id;
  })  
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState('');

  // mount, updte시 코드 실행 useEffect
  // useEffect 안에 있는 코드는 html 렌더링 후 동작
  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert(false); }, 2000)
    return ()=>{
      // useEffect 동작 전에 실행
      // clean up function
      clearTimeout(a); // 타이머 제거해주는 함수
    }
  }, []) // <- mount에만 실행됨

  const handleInputChange = (e) => {
    const value = e.target.value;

    // If the value is not a number and not an empty string, prevent the change
    if (isNaN(value) && value !== '') {
      window.alert('숫자만 입력해주세요.');
    } else {
      setNum(value);
    }
  };

  return (
    <div className="container" style={{marginTop:10}}>
      {
        alert == true
        ? <div className='alert alert-warning'>
            🔥2초이내 구매시 할인🔥
          </div>
        : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={찾은상품.img} width='80%' alt={찾은상품.title} />
        </div>
        <div className="col-md-6">
          {/* {count}
          <ColorBtn bg='grey' onClick={()=>{setCount(count+1)}}>좋아요</ColorBtn> */}
<input onChange={handleInputChange} value={num} />
          <h5 className="pt-5">{찾은상품.title}</h5>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
          <ColorBtn bg='pink'>장바구니</ColorBtn>
          <ColorBtn bg='skyblue'>주문하기</ColorBtn>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;