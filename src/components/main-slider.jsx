import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class MainSlider extends Component {
    state = {  } 
    render() { 
        return (
            <Carousel fade>
              {/* Carousel item 1 */}
              <Carousel.Item>
              <div class="d-block w-100 minh-600 main-slide bg-light d-flex justify-content-center align-items-center px-5 text-uppercase" alt="First slide">
                <div className='carousel-slide d-flex justify-content-center align-items-center'>
                <Carousel.Caption className='d-flex flex-column align-items-start justify-content-start text-light h-75 col-6'>
                  <div className='carousel-caption text-dark'><h2 className='display-2'>"Make Today Great"</h2>
                  <p className="display-6">With our themed coffee cips</p></div>
                  <a href="#products" className='btn btn-dark text-uppercase px-4 py-2 carousel-margin'>Shop now</a>
                </Carousel.Caption>
                <div className="carousel-img d-flex justify-content-end col-6">
                  <img src="/assets/img/product00bg.png" className='max500' alt='product' />
                </div>
                </div>
              </div>
              </Carousel.Item>

               {/* Carousel item 2 */}
               <Carousel.Item>
              <div class="d-block w-100 minh-600 main-slide bg-dark d-flex justify-content-center align-items-center px-5 text-uppercase" alt="First slide">
                <div className='carousel-slide d-flex justify-content-center align-items-center'>
                <Carousel.Caption className='d-flex flex-column align-items-start justify-content-start text-light h-75 col-6'>
                  <div className='carousel-caption text-light'><h2 className='display-2'>"Home Sweet home"</h2>
                  <p className="display-6">Get yourself one of our themed cups</p></div>
                  <a href="#products" className='btn btn-light text-uppercase px-4 py-2 carousel-margin'>Discover all</a>
                </Carousel.Caption>
                <div className="carousel-img d-flex justify-content-end col-6">
                  <img src="/assets/img/product00bg.png" className='max500' alt='product' />
                </div>
                </div>
              </div>
              </Carousel.Item>

            </Carousel>
          )
    }
}
 
export default MainSlider;