import React from 'react';
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

  return (
    <div className="container" style={{marginTop:10}}>
      <div className="row">
        <div className="col-md-6">
        <img src={찾은상품.img} width='80%' alt={찾은상품.title} />
        </div>
        <div className="col-md-6">
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