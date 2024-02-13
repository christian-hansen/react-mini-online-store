import React, { Component } from 'react';
import { Offcanvas } from 'react-bootstrap';

class ShoppingCart extends Component {

    state = {} 

    // Helper function to find product details by ID
    findProductById = (productId) => {
      return this.props.products.find(product => product.id === productId);
  }

  render() { 
      return (  
        <Offcanvas show={this.props.show} onHide={this.props.onHide} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><h2>Your Cart</h2></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <div className="shopping-cart">
            {this.props.items.map((item) => {
            // Find product details based on item id
            const product = this.findProductById(item.id);
            return (
              <div key={item.id} className='d-flex gap-4 align-items-center px-4'>
                <img className="cart-img" src={"/assets/img/" + product.image + ".jpg"}/>
                  <div className='product-details-container d-flex flex-column'>
                    <h4 className='product-title'>{product.title}</h4>
                    <div className='product-price-container d-flex gap-2'>
                      <div>{item.amount} x</div>
                      <div><strong>{product.price * item.amount}€</strong></div>
                    </div>
                    <div className="cart-btn-container d-flex gap-2">
                      <button onClick={() => this.props.onIncrease(item.id)}>+</button>
                      <button onClick={() => this.props.onDecrease(item.id)}>-</button>
                    </div>
                  </div>
              </div>
                  );
              })}


          </div>
          </Offcanvas.Body>
        </Offcanvas>
      );
  }
}

 
export default ShoppingCart;