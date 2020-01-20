import React, { Component } from 'react'
import { Layout, Button } from 'antd'
import 'antd/dist/antd.css'
import './layout.css';

class header extends Component {

    state = {

    }


    render() {
        return (
            <div className="header" style={{dispaly:'flex', justify:'end',float:'right'}}>
                <Button>Create an account</Button>
                <Button >Log in</Button> 
               
            </div>
        )
    }
}

export default header
