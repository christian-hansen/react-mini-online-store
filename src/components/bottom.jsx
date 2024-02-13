import React, { Component } from 'react';

class Bottom extends Component {
    state = {

    } 

    year = new Date().getFullYear();

    render() { 
        return <div className='border-top border-dark w-100 p-3'>
            <div className='container'>
                <div className="row d-flex flex-wrap justify-content-between">
                    <div className="col-md-4 col-sm6">
                        <div className="d-flex">We ship:
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div> 
                    </div>
                    <div className="col-md-4 col-sm6">
                        <div className="d-flex">Payment options:
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm6">© Copyright {this.year}.</div>
                </div>
            </div>
        </div>;
    }
}
 
export default Bottom;