// import { useState } from 'react';
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

import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Products', href: '/products', current: false },
    { name: 'Cart', href: '/cart', current: false },
    // { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header(props) {
    const { onRemove, onAdd, cartItems } = props;
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // const itemsPrice = cartItems.price;
    // const taxPrice = itemsPrice * 0.14;
    // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    // const totalPrice = itemsPrice + taxPrice + shippingPrice;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                <Button onClick={handleShow}
                                    type="submit"
                                    className="d-flex flex-row items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ms-3 w-3/5">
                                    Cart
                                    {props.countCartItems ? (
                                        <button className="badge">{props.countCartItems}</button>
                                    ) : (
                                        ''
                                    )}
                                </Button>

                            </div>
                        </div>
                    </div>

                    <Transition.Root show={show} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={handleClose}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-hidden">
                                <div className="absolute inset-0 overflow-hidden">
                                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                                            enterFrom="translate-x-full"
                                            enterTo="translate-x-0"
                                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                                            leaveFrom="translate-x-0"
                                            leaveTo="translate-x-full"
                                        >
                                            <Dialog.Panel className="pointer-events-auto relative w-screen max-w-lg">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-in-out duration-500"
                                                    enterFrom="opacity-0"
                                                    enterTo="opacity-100"
                                                    leave="ease-in-out duration-500"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                        <Button
                                                            type="button"
                                                            className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                            onClick={handleClose}
                                                        >
                                                            <span className="absolute -inset-2.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </Button>
                                                    </div>
                                                </Transition.Child>
                                                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                                    <div className="px-4 sm:px-6">
                                                        <Dialog.Title className="d-flex justify-between text-base font-semibold leading-6 text-gray-900">
                                                            Cart Items
                                                        <Button class="btn btn-sm btn-secondary"><Link to="/cart">More</Link></Button>
                                                        </Dialog.Title>
                                                    </div>
                                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                        <div>
                                                            {cartItems.length === 0 && <div>Cart is empty</div>}
                                                            {cartItems.map((item) => (
                                                                <div key={item.id} class="col-lg-12 table-responsive mb-3">
                                                                    <table class="table table-bordered text-center mb-0">
                                                                        <tbody class="align-middle">
                                                                            <tr>
                                                                                <td class="align-middle w-36"><img src={item.images[0].src} alt={item.images[0].alt} />{item.name}</td>
                                                                                <td class="align-middle">{item.price}</td>
                                                                                <td class="align-middle">
                                                                                    <div class="input-group quantity mx-auto">
                                                                                        <div class="input-group-btn">
                                                                                            <button class="btn btn-sm btn-primary btn-minus" onClick={() => onRemove(item)}>
                                                                                                <i class="fa fa-minus"></i>
                                                                                            </button>
                                                                                        </div>
                                                                                        <input type="text" class="form-control form-control-sm bg-secondary text-center" value={item.qty} />
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
                                                    </div>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </div>
                        </Dialog>
                    </Transition.Root>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        // <Navbar expand="lg" className="header-container">
        //     <Container fluid>
        //         <Navbar.Brand href="#">Online Shopping Store</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="..">Home</Nav.Link>
        //                 {/* <Link to="/products">Products</Link> */}
        //                 <Nav.Link href="/products">Products</Nav.Link>
        //                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">
        //                         Another action
        //                     </NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">
        //                         Separated link
        //                     </NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //         </Navbar.Collapse>
        //         {/* <Form className="d-flex">
        //             <Form.Control
        //                 type="search"
        //                 placeholder="Search"
        //                 className="me-2"
        //                 aria-label="Search"
        //             />
        //             <Button variant="outline-success">Search</Button>
        //         </Form> */}
        //         <Button variant="primary" onClick={handleShow}>
        //             Cart
        //             {props.countCartItems ? (
        //                 <button className="badge">{props.countCartItems}</button>
        //             ) : (
        //                 ''
        //             )}
        //         </Button>
        //         <Offcanvas className="cart" show={show} onHide={handleClose} placement='end'>
        //             <div className="d-flex justify-content-between mb-3">
        //                 <h2>Cart Items</h2>
        //                 <button class="btn btn-sm btn-secondary"><Link to="/cart">More</Link></button>
        //             </div>

        //             <div>
        //                 {cartItems.length === 0 && <div>Cart is empty</div>}
        //                 {cartItems.map((item) => (
        //                     <div key={item.id} class="col-lg-12 table-responsive mb-3">
        //                         <table class="table table-bordered text-center mb-0">
        //                             <tbody class="align-middle">
        //                                 <tr>
        //                                     <td class="align-middle image"><img src={item.imageSrc} alt={item.imageAlt} />{item.name}</td>
        //                                     <td class="align-middle">{item.price}</td>
        //                                     <td class="align-middle">
        //                                         <div class="input-group quantity mx-auto">
        //                                             <div class="input-group-btn">
        //                                                 <button class="btn btn-sm btn-primary btn-minus" onClick={() => onRemove(item)}>
        //                                                     <i class="fa fa-minus"></i>
        //                                                 </button>
        //                                             </div>
        //                                             <input type="text" class="form-control form-control-sm bg-secondary text-center" value={item.qty} />
        //                                             <div class="input-group-btn">
        //                                                 <button class="btn btn-sm btn-primary btn-plus" onClick={() => onAdd(item)}>
        //                                                     <i class="fa fa-plus"></i>
        //                                                 </button>
        //                                             </div>
        //                                         </div>
        //                                     </td>
        //                                     <td class="align-middle">{item.qty} x {item.price}</td>

        //                                 </tr>
        //                             </tbody>
        //                         </table>
        //                     </div>
        //                 ))}
        //             </div>
        //         </Offcanvas>
        //     </Container>
        // </Navbar>

    )
}
