// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';



const NavBar = () => {
    const cartProducts = useSelector(state => state.cart);
    return(
        <>
           <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Redux-Tooklkit</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
       <Nav  className="me-auto my-2 my-lg-0" >
            <Nav.Link to="/" as={Link}>Product</Nav.Link>
            </Nav>

            <Nav className="justify-content-end">
           <Navbar.Toggle />
           <Navbar.Collapse>
            <Navbar.Text>
 <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
            </Navbar.Text>
           </Navbar.Collapse>
           </Nav>
            
      </Container>
    </Navbar>
        </>
    );
}

export default NavBar;