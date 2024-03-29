import React, { Component } from 'react';

class Newsletter extends Component {
    state = {  } 
    
    render() { 
        return (

        <section id="contact" class="container-grid padding-large position-relative overflow-hidden">
          <div class="container">
            <div class="row">
              <div class="subscribe-content bg-dark d-flex flex-wrap justify-content-center align-items-center padding-medium">
                <div class="col-md-6 col-sm-12">
                  <div class="display-header pe-3 text-light">
                    <h2 class="display-7 text-uppercase">Stay in touch</h2>
                    <p>Let us keep you informed about our latest news, updates and deals.</p>
                  </div>
                </div>
                <div class="col-md-5 col-sm-12">
                  <form class="subscription-form validate">
                    <div class="input-group flex-wrap">
                      <input class="form-control btn-rounded-none" type="email" name="EMAIL" placeholder="Your email address here" required="" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"/>
                      <button class="btn btn-medium btn-primary text-uppercase btn-rounded-none" type="submit" name="subscribe">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }}
 
export default Newsletter;