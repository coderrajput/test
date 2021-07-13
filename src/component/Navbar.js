import React from 'react'
import Nav from 'react-bootstrap/Nav'


export default function NavDropdownExample() {
   
  
    return (
      <Nav  activeKey="1" className="justify-content-center bg-warning h-25">
        <Nav.Item>
          <Nav.Link eventKey="1" href="/">
           <img  className="img-fluid" src="https://s3.us-west-2.amazonaws.com/kwcdn.kwalee.com/wp-content/uploads/2019/01/14154125/cropped-Kwalee-All-Black-Logo-NEW1.png" />
          </Nav.Link>
        </Nav.Item>
        
      
      </Nav>
    );
  }
  
 