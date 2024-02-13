import React, { Component } from 'react';
import Header from "./components/header";
import MainSlider from "./components/main-slider";

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
        <Header />
        <MainSlider />
        </React.Fragment>;
    }
}
 
export default App;