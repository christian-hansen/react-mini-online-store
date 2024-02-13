import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
            <Navbar id="top" key='md' expand='md' className="bg-body-secondary text-uppercase">
              <Container fluid>
                <Navbar.Brand href="#">Mini Online Store</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-md`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#top">Home</Nav.Link>
                      <Nav.Link href="#services">Services</Nav.Link>
                      <Nav.Link href="#products">Products</Nav.Link>
                      <Nav.Link href="#sale">Sale</Nav.Link>
                      <Nav.Link href="#contact">Stay in touch</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>

    //         <header id="header" class="site-header header-scrolled position-fixed text-black bg-light">
    //   <nav id="header-nav" class="navbar navbar-expand-lg px-3 mb-3">
    //     <div class="container-fluid">
    //       <a class="navbar-brand" href="index.html">
    //         <img src="images/main-logo.png" class="logo"/>
    //       </a>
    //       <button class="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
    //         <svg class="navbar-icon">
    //         </svg>
    //       </button>
    //       <div class="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
    //         <div class="offcanvas-header px-4 pb-0">
    //           <a class="navbar-brand" href="index.html">
    //             <img src="images/main-logo.png" class="logo"/>
    //           </a>
    //           <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
    //         </div>
    //         <div class="offcanvas-body">
    //           <ul id="navbar" class="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
    //             <li class="nav-item">
    //               <a class="nav-link me-4" href="#billboard">Home</a>
    //             </li>
    //             <li class="nav-item">
    //               <a class="nav-link me-4" href="#company-services">Services</a>
    //             </li>
    //             <li class="nav-item">
    //               <a class="nav-link me-4" href="#mobile-products">Products</a>
    //             </li>
    //             <li class="nav-item">
    //               <a class="nav-link me-4" href="#smart-watches">Watches</a>
    //             </li>
    //             <li class="nav-item">
    //               <a class="nav-link me-4" href="#yearly-sale">Sale</a>
    //             </li>
    //             <li class="nav-item">
    //               <a class="nav-link me-4 active" href="#latest-blog">Blog</a>
    //             </li>
    //             <li class="nav-item dropdown">
    //               <a class="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages</a>
    //               <ul class="dropdown-menu">
    //                 <li>
    //                   <a href="about.html" class="dropdown-item">About</a>
    //                 </li>
    //                 <li>
    //                   <a href="blog.html" class="dropdown-item">Blog</a>
    //                 </li>
    //                 <li>
    //                   <a href="shop.html" class="dropdown-item">Shop</a>
    //                 </li>
    //                 <li>
    //                   <a href="cart.html" class="dropdown-item">Cart</a>
    //                 </li>
    //                 <li>
    //                   <a href="checkout.html" class="dropdown-item">Checkout</a>
    //                 </li>
    //                 <li>
    //                   <a href="single-post.html" class="dropdown-item">Single Post</a>
    //                 </li>
    //                 <li>
    //                   <a href="single-product.html" class="dropdown-item">Single Product</a>
    //                 </li>
    //                 <li>
    //                   <a href="contact.html" class="dropdown-item">Contact</a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li class="nav-item">
    //               <div class="user-items ps-5">
    //                 <ul class="d-flex justify-content-end list-unstyled">
    //                   <li class="search-item pe-3">
    //                     <a href="#" class="search-button">
    //                       <svg class="search">

    //                       </svg>
    //                     </a>
    //                   </li>
    //                   <li class="pe-3">
    //                     <a href="#">
    //                       <svg class="user">

    //                       </svg>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href="cart.html">
    //                       <svg class="cart">

    //                       </svg>
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
      );
}}

export default Header;