
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/NavbarBrand'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'


const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);


  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        {/* <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header> */}
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};


const App = () => (
  <Container className="p-3">
    <Navbar className="fixed-header">
      <p>Clicky Game</p>
    </Navbar>
    <Jumbotron>
      <h1 className="header">Welcome To Clicky Game</h1>

    </Jumbotron>
    
        <span role="img" aria-label="clickable" href="../public/logo192.png">
        <Image src="appa.png" thumbnail />
        </span>
        <span role="img" aria-label="clickable" href="../public/logo192.png">
        <Image src="azula.png" thumbnail />
        </span>
        <span role="img" aria-label="clickable" href="../public/logo192.png">
        <Image src="iroh.jpg" thumbnail />
        </span>
        <span role="img" aria-label="clickable" href="../public/logo192.png">
        <Image src="katara.jpeg" thumbnail />
        </span>
        <span role="img" aria-label="clickable" href="../public/logo192.png">
        <Image src="sokka.jpg" thumbnail />
        </span>
        <span role="img" aria-label="clickable" href="../public/logo192.png">
        <Image src="toph.png" thumbnail />
        </span>
        <span role="img" aria-label="clickable" href="../public/logo192.png">
        <Image src="zuko.jpg" thumbnail />
        </span>
        <span role="img" aria-label="clickable" href="../public/logo192.png">
        <Image src="aang.png" thumbnail />
        </span>
  </Container>
);

export default App;
