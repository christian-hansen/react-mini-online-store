import React, { Component } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';

class Header extends Component {
  
  render() {
    return (
            <Navbar id="top" key='md' expand='md' className="bg-body-secondary text-uppercase sticky-top p-3" style={{height: '72px'}}>
              <Container fluid>
                <div className="store-top-logo-cart">
                <Navbar.Brand href="#" className="brand-name navbar-brand h1 d-flex justify-content-center align-items-center mb-0">Mini Online Store</Navbar.Brand>
                <Navbar.Brand href="#" className="brand-name-mobile"><svg className="top-icon " viewBox="0 0 512 512"><path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/></svg></Navbar.Brand>
                <div className='store-top-mobile h-100 d-flex align-items-center gap-2' onClick={this.props.openCart}>
                  <svg className="store-icon" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    ({this.props.noOfCartItems})</div>
                  </div>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-md`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                      Mini Online Store
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#top">Home</Nav.Link>
                      <Nav.Link href="#services">Services</Nav.Link>
                      <Nav.Link href="#products">Products</Nav.Link>
                      <Nav.Link href="#sale">Seasonal</Nav.Link>
                      <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
 
                  </Offcanvas.Body>

                </Navbar.Offcanvas>
                <div className='store-top-desktop h-100 d-flex align-items-center gap-2' onClick={this.props.openCart}>
                  <svg className="store-icon" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    ({this.props.noOfCartItems})</div>
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