import React from 'react';

function ProductDetail(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <img src={props.anime.img} width='80%' alt={props.anime.title} />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.anime.title}</h4>
          <p>{props.anime.content}</p>
          <p>{props.anime.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;