import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
export class HotelDetail extends Component {

    constructor(props){
        super(props);

    }



    render() {
        return (
            <div>
                <Header></Header>
                <div></div>
                <Footer/>
            </div>
        )
    }
}

export default HotelDetail
