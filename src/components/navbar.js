import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import {useCart} from '../components/context/Cart.context';

function NavBar() {
    const {cartProducts} = useCart();
    return (
        <div className='mt-4 mb-4'>
            <Navbar expand="lg" className="bg-info">
            <Container>
                <Nav>
                <Navbar.Brand href="/">VS SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Nav>
                <Nav>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className='mt-2'><Link to='/' style={{ textDecoration: 'none',color:"black" }}>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/cart' style={{ textDecoration: 'none',color:"black" }}>
                        <button className='btn btn-outline-dark'>
                                        <i className="bi-cart-fill me-2"></i>
                                        Cart
                                        <span className='badge bg-dark text-white ms-2 rounded-pill'>{cartProducts.length}</span>
                                    </button>
                            </Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar;