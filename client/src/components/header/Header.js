import { useState } from 'react';
import React from 'react';
import './Header.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';



export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <header className="header-container">
            <div>
                <a href="#/">
                    <h2>Online Shopping Store</h2>
                </a>
            </div>
            <div>
                <a href="#">
                    Home
                </a>
                <a href="#">
                    About
                </a>
                <a href="#">
                    Cart
                </a>
            </div>
            <div className="search-content">
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
            <Button variant="primary" onClick={handleShow}>Cart</Button>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>

        </header>
    )
}
