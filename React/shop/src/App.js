import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import bannerImage from './img/bg.jpeg';
import {useState} from 'react';
import data from './data.js';

function App() {

  let [anime] = useState(data);
  console.log(anime);

  return (
    <div className="App">
      {/* navbar */}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">スキップとローファー</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* banner */}
      <div className='main-bg' style={{backgroundImage : 'url(' + bannerImage + ')'}}></div>

      <Container>
      <Row>

        {/* 컴포넌트만 */}
        {/* <Card anime={anime[0]}/>
        <Card anime={anime[1]}/>
        <Card anime={anime[2]}/> */}

        {/* map만 */}
        {/* {
          anime.map(function(anime,i){
            return (
              <Col key={i}>
                <img src={anime.img} width='80%' alt={anime.title} />
                <h5>{anime.title}</h5>
                <p>{anime.content}</p>
              </Col>
            )
          })
        } */}

        {/* 컴포넌트 + map */}
        {
          anime.map(function(anime,i){
            return (
              <Card anime={anime}/>
            )
          })
        }
      </Row>
    </Container>
    </div>
  );
}

function Card(props) {
  return (
    <Col>
      <img src={props.anime.img} width='80%' alt={props.anime.title} />
      <h5>{props.anime.title}</h5>
      <p>{props.anime.content}</p>
    </Col>
  )
}

export default App;
