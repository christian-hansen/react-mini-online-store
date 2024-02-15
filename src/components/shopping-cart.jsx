import React, { Component } from 'react';
import { Offcanvas } from 'react-bootstrap';

class ShoppingCart extends Component {

    state = {} 

    // Helper function to find product details by ID
    findProductById = (productId) => {
      return this.props.products.find(product => product.id === productId);
    }

    calculateTotal = () => {
      const total = this.props.items.reduce((acc, item) => {
          return acc + (item.price * item.amount);
      }, 0); // Start accumulating from 0
      return total.toFixed(2); 
    };

  render() { 
      return (  
        <Offcanvas show={this.props.show} onHide={this.props.onHide} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><h3>Your Cart</h3></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <div className="shopping-cart">
            {this.props.items.map((item) => {
            const product = this.findProductById(item.id);
            return (
              <div key={item.id} className='d-flex gap-4 align-items-center p-3'>
                <img alt={product.image + " image"} className="cart-img" src={"/assets/img/" + product.image + ".jpg"}/>
                  <div className='product-details-container d-flex flex-column'>
                    <div className='product-title h3'>{product.title}</div>
                    <div className="h6">Price: {item.price}€</div>
                    <div className="d-flex flex-column gap-2">
                      <div className='d-flex mb-1'>
                        <button className='btn-cart btn btn-dark border' onClick={() => this.props.onIncrease(item.id)}>+</button>
                        <div className='amount border btn-cart d-flex align-items-center justify-content-center'>{item.amount}</div>
                        <button className='btn-cart btn btn-light border' onClick={() => this.props.onDecrease(item.id)}>-</button></div>
                      <div className='h6'><strong>Total: {(product.price * item.amount).toFixed(2)} €</strong></div>
                    </div>
                  </div>
              </div>
                  );
              })};
          </div>

          {this.props.items.length > 0 && (
            <div className="checkout-container position-relative bottom mt-2 py-4 px-3">
              <div className='lead total-cost py-2'>Cart total: {this.calculateTotal()}€</div>
              <button className='btn btn-dark border w-100' onClick={this.props.onClearCart}>Checkout</button>
            </div>
          )}

          {this.props.items.length === 0 && (
            <div className="checkout-container">
             <div>Your shopping cart is empty. Please go back to <a className='link-primary' href='#products' onClick={this.props.onHide}>Products</a> and add an item to the cart.</div>
            </div>
          )}


          </Offcanvas.Body>
        </Offcanvas>
      );
  }
}

 
export default ShoppingCart;