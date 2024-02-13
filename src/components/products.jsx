import React, { Component } from 'react';

class Products extends Component {
    state = {  } 
    render() { 
        return (
        <div class="slide col-3 p-4">
            <div class="product-card position-relative">
                <div class="image-holder">
                    <img src={"/assets/img/" + this.props.image + ".jpg"} alt={this.props.title + " image"} class="img-fluid" />
                </div>
                <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                    <button class="btn btn-medium btn-black" onClick={this.props.onAdd}>Add to Cart<svg class="cart-outline"></svg></button>
                    </div>
                </div>
                <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 class="card-title text-uppercase">
                    <a href="#">{this.props.title}</a>
                    </h3>
                    <span class="item-price text-primary">{this.props.price}</span>
                </div>
            </div>
        </div>


/* <section className='product-store position-relative padding-large'>
    <div className="container">
        <div className="row">
            <div class="display-header d-flex justify-content-between pb-3">
                <h2 class="display-7 text-dark text-uppercase">Mobile Products</h2>
            </div>
            
            <div className='d-flex no-padding'>


                <div class="slide col-3 p-4">
                    <div class="product-card position-relative">
                        <div class="image-holder">
                            <img src="/assets/img/product1.jpg" alt="product-item" class="img-fluid" />
                        </div>
                        <div class="cart-concern position-absolute">
                            <div class="cart-button d-flex">
                            <a href="#" class="btn btn-medium btn-black">Add to Cart<svg class="cart-outline"></svg></a>
                            </div>
                        </div>
                        <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                            <h3 class="card-title text-uppercase">
                            <a href="#">Iphone 11</a>
                            </h3>
                            <span class="item-price text-primary">$980</span>
                        </div>
                    </div>
                </div>

            </div>

      </div>
    </div>
      </section> */
      );
    }
}
 
export default Products;