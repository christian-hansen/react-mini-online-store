import React, { Component } from 'react';

class Banner extends Component {
    state = {  } 
    
    render() { 
        return (
          <section id="sale" class="bg-dark overflow-hidden padding-large padding-x-large padding-mobile-small sale minh-600">
            <div class="row d-flex flex-wrap align-items-center">
              <div class="col-md-12 col-sm-12">
                <div class="text-content padding-medium padding-x-large padding-mobile-small text-light">
                  <h3>Now available</h3>
                  <h2 class="display-2 pb-5 text-uppercase text-light">New Winter Cup</h2>
                  <a href="#products" class="btn btn-medium btn-secondary text-uppercase btn-rounded-none">Shop products</a>
                </div>
              </div>
            </div>
          </section>
        );
    }
}
 
export default Banner;