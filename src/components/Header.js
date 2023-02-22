import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
function Header() {

    return (
        <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/"><h2>Ur<span className='span'>Fine</span></h2></Navbar.Brand>
          <Nav className="me ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>

        </>
    )
}

export default Header