import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import '../styles.css'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

class MainSlider extends Component {
    state = {  } 
    render() { 
        return (
            <Carousel fade>
              <Carousel.Item>
              <div class="d-block w-100 slide bg-light d-flex justify-content-end align-items-center px-5" alt="First slide">
                <Carousel.Caption className='d-flex flex-column align-items-start text-dark h-75'>
                  <h2>Technology hack you won't get</h2>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                <img src="/assets/img/product0.png" className='max500' />
              </div>
              </Carousel.Item>
              {/* <Carousel.Item>
              <div class="d-block w-100 slide" style={{backgroundColor: "red"}} alt="First slide">
              <Carousel.Caption>
              <img src="/assets/img/product1.jpg" alt="" />
                  <h2>Second slide label</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </div>
              </Carousel.Item> */}
            </Carousel>

    // <section id="billboard" class="position-relative overflow-hidden bg-light-blue">
    //   <div class="swiper main-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
    //     <div class="swiper-wrapper animate-slider" id="swiper-wrapper-1edd61f4905e20bf" aria-live="polite">
    //       <div class="swiper-slide swiper-slide-active width1024" role="group" aria-label="1 / 2">
    //         <div class="container">
    //           <div class="row d-flex align-items-center">
    //             <div class="col-md-6">
    //               <div class="banner-content">
    //                 <h1 class="display-2 text-uppercase text-dark pb-5">Your Products Are Great.</h1>
    //                 <a href="shop.html" class="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
    //               </div>
    //             </div>
    //             <div class="col-md-5">
    //               <div class="image-holder">
    //                 <img src="images/banner-image.png" alt="banner"/>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="swiper-slide swiper-slide-next width1024" role="group" aria-label="2 / 2">
    //         <div class="container">
    //           <div class="row d-flex flex-wrap align-items-center">
    //             <div class="col-md-6">
    //               <div class="banner-content">
    //                 <h1 class="display-2 text-uppercase text-dark pb-5">Technology Hack You Won't Get</h1>
    //                 <a href="shop.html" class="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
    //               </div>
    //             </div>
    //             <div class="col-md-5">
    //               <div class="image-holder">
    //                 <img src="images/banner-image.png" alt="banner"/>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    //   <div class="swiper-icon swiper-arrow swiper-arrow-prev" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-9ee46e6eb0dc380d" aria-disabled="false">
    //     <svg class="chevron-left">
    //     </svg>
    //   </div>
    //   <div class="swiper-icon swiper-arrow swiper-arrow-next" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-9ee46e6eb0dc380d" aria-disabled="true">
    //     <svg class="chevron-right">
    //     </svg>
    //   </div>
    // </section>
          )
    }
}
 
export default MainSlider;