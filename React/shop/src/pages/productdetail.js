import React from 'react';
import { useParams } from 'react-router-dom';

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
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;