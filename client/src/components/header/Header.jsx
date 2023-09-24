import { useState } from 'react';
import React from 'react';
import './Header.scss';
import Cart from '../cart/Cart';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";



export default function Header(props) {
    const { onRemove, onAdd, cartItems } = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const itemsPrice = cartItems.price;
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        // <>        
        // <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

        // 	<div class="container">
        // 		<a class="navbar-brand" href="index.html">Furni<span>.</span></a>

        // 		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        // 			<span class="navbar-toggler-icon"></span>
        // 		</button>

        // 		<div class="collapse navbar-collapse" id="navbarsFurni">
        // 			<ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
        // 				<li class="nav-item active">
        // 					<a class="nav-link" href="index.html">Home</a>
        // 				</li>
        // 				<li><a class="nav-link" href="shop.html">Shop</a></li>
        // 				<li><a class="nav-link" href="about.html">About us</a></li>
        // 				<li><a class="nav-link" href="services.html">Services</a></li>
        // 				<li><a class="nav-link" href="blog.html">Blog</a></li>
        // 				<li><a class="nav-link" href="contact.html">Contact us</a></li>
        // 			</ul>

        // 			<ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
        // 				<li><a class="nav-link" href="#"><img src="images/user.svg"/></a></li>
        // 				<li><a class="nav-link" href="cart.html"><img src="images/cart.svg"/></a></li>
        // 			</ul>
        // 		</div>
        // 	</div>

        // </nav>
        // </>

        <Navbar expand="lg" className="header-container">
            <Container fluid>
                <Navbar.Brand href="#">Online Shopping Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="..">Home</Nav.Link>
                        {/* <Link to="/products">Products</Link> */}
                        <Nav.Link href="/products">Products</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                {/* <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                <Button variant="primary" onClick={handleShow}>
                    Cart
                    {props.countCartItems ? (
                        <button className="badge">{props.countCartItems}</button>
                    ) : (
                        ''
                    )}
                </Button>
                <Offcanvas className="cart" show={show} onHide={handleClose} placement='end'>
                    <h2>Cart Items</h2>

                    <div>
                        {cartItems.length === 0 && <div>Cart is empty</div>}
                        {cartItems.map((item) => (
                            <div key={item.id} class="col-lg-12 table-responsive mb-3">
                                <table class="table table-bordered text-center mb-0">
                                    <tbody class="align-middle">
                                        <tr>
                                            <td class="align-middle image"><img src={item.imageSrc} alt={item.imageAlt} />{item.name}</td>
                                            <td class="align-middle">{item.price}</td>
                                            <td class="align-middle">
                                                <div class="input-group quantity mx-auto">
                                                    <div class="input-group-btn">
                                                        <button class="btn btn-sm btn-primary btn-minus" onClick={() => onRemove(item)}>
                                                            <i class="fa fa-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" class="form-control form-control-sm bg-secondary text-center" value={item.quantity} />
                                                    <div class="input-group-btn">
                                                        <button class="btn btn-sm btn-primary btn-plus" onClick={() => onAdd(item)}>
                                                            <i class="fa fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="align-middle">{item.qty} x {item.price}</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                </Offcanvas>
            </Container>
        </Navbar>

    )
}
