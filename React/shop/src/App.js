import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import bannerImage from './img/bg.jpeg';
import {useState} from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import ProductDetail from './pages/productdetail.js';

function App() {

  let [anime] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      {/* navbar */}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">スキップとローファー</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            {/* navigate(1) : 앞으로, navigate(-1) : 뒤로 */}
            <Nav.Link onClick={()=>{navigate('/detail')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg' style={{backgroundImage : 'url(' + bannerImage + ')'}}></div>
          
          <Container style={{marginTop:10}}>
          <Row>
            {
              anime.map(function(anime,i){
                return (
                  <Card anime={anime}/>
                )
              })
            }
          </Row>
        </Container>
        </>
      }/>
      <Route path="/detail/:id" element={<ProductDetail anime={anime} /> }/>
      {/* Nested Routes */}
      <Route path="/about" element={<About /> }>
        <Route path='member' element={<div>멤버임</div>}/>
        <Route path='location' element={<About /> }/>
      </Route>
      <Route path="/event" element={<Event /> }>
        <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
        <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
      </Route>
      {/* 경로를 설정한 페이지 외 다른 페이지로 접근 시(404) */}
      <Route path='*' element={<div>존재하지 않는 페이지입니다.</div>}></Route>
      </Routes>

    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      {/* Nested Routes가 보여지는 부분 */}
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      {/* Nested Routes가 보여지는 부분 */}
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return (
    <Col>
      <img src={props.anime.img} width='80%' alt={props.anime.title} />
      <p>
        {props.anime.title}<br></br>
        {props.anime.content}<br></br>
        <span style={{color: 'red'}}>
          {props.anime.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </span>
      </p>
    </Col>
  )
}

export default App;
