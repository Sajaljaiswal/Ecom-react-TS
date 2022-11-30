import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../Context/CartContext'
const Navbar = () => {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky='top' className="bg-white shadow-sm mb-3">
            <Container>
                <h2>My_Store</h2>
                <Nav>
                    <Nav.Link to='/' as={NavLink}>HOME</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link to='/items' as={NavLink}>PRODUCTS</Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button variant="warning" onClick={openCart}><i className="fa fa-shopping-cart"></i> <span >({cartQuantity})</span></Button>)}
            </Container>
        </NavbarBs >
    )
}

export default Navbar
