import React, { Component } from 'react';

class Products extends Component {
    state = {  } 
    render() { 
        return (
        <div class="col-lg-3 col-md-6 p-4">
            <div class="product-card position-relative">
                <div class="image-holder d-flex justify-content-center align-items-center">
                    <img src={"/assets/img/" + this.props.image + ".jpg"} alt={this.props.title + " image"} class="img-fluid" />
                </div>
                <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                    <button class="btn btn-medium btn-black" onClick={this.props.onAdd}>Add to Cart<svg class="cart-outline">
                    <svg viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        </svg></button>
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


                <div class=" col-3 p-4">
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