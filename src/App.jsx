import React, { Component } from 'react';
import Header from "./components/header";
import MainSlider from "./components/main-slider";
import Services from './components/services';
import Bottom from './components/bottom';
import Newsletter from './components/newsletter';
import Products from './components/products';
import Banner from './components/cta-banner';
import Footer from './components/footer';
import Testimonial from './components/testimonial';
import ShoppingCart from './components/shopping-cart';
import products from './helper/products';

class App extends Component {
    state = { 
        items: [],
        showCart: false
    }


    clearCart = () => {
        this.setState({ items: [] });
    };

    openCart = () => {
        this.setState({ showCart: true });
    }

    closeCart = () => {
        this.setState({ showCart: false });
    }

    addItem = (id, amountChange = 1) => {
        this.setState((prevState) => {
            const productDetails = products.find(product => product.id === id);
            if (!productDetails) {
                console.error('Product not found');
                return;
            }
            
            let itemExists = false;
            const newItems = prevState.items.map((item) => {
                if (item.id === id) {
                    itemExists = true;
                    return { ...item, amount: item.amount + amountChange };
                }
                return item;
            });
    
            if (!itemExists) {
                newItems.push({
                    ...productDetails,
                    amount: amountChange,
                });
            }
    
            return { items: newItems };
        }, this.openCart);
    };
    
    increaseItemQuantity = (id) => {
        this.addItem(id, 1); // Increase by 1
    };
    
    decreaseItemQuantity = (id) => {
        this.setState(prevState => {
            const itemIndex = prevState.items.findIndex(item => item.id === id);
            if (itemIndex === -1) return; // Item not found
    
            const newItems = [...prevState.items];
            const currentItem = newItems[itemIndex];
    
            if (currentItem.amount > 1) {
                // Decrease quantity if more than 1
                currentItem.amount -= 1;
            } else {
                // Remove item from cart if quantity is 1
                newItems.splice(itemIndex, 1);
            }
    
            return { items: newItems };
        });
    };

    render() { 
        return <React.Fragment>
        <Header 
         openCart={this.openCart}
         noOfCartItems={this.state.items.length}/>
        <MainSlider />
        <Services />

        <section id="products" className='product-store position-relative'>
            <div className="container">
                <div className="row">
                    <div class="display-header d-flex justify-content-between pb-3">
                        <h2 class="display-7 text-dark text-uppercase">Cups</h2>
                    </div>
                
                    <div className='row d-flex no-padding'>

                    {/* Get data from products helper database and import them to the Products component */}
                    {products.map((product) => (
                        <Products
                            key={product.id}
                            onAdd={() => this.addItem(product.id, 1)} // Adds the item with an initial quantity of 1
                            image={product.image}
                            title={product.title}
                            price={`${product.price}€`}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </section>
        
        <Testimonial />
        <Banner />
        <Newsletter />
        <Footer />
        <Bottom />

        <ShoppingCart 
        items={this.state.items} 
        show={this.state.showCart} 
        onHide={this.closeCart}
        products={products}
        onIncrease={this.increaseItemQuantity}
        onDecrease={this.decreaseItemQuantity}
        onClearCart={this.clearCart}/>
        
        </React.Fragment>;
    }
}
 
export default App;