import React, { Component } from 'react';
import Navbar from '../navigation/navbar';
import Main from '../main/main';
import classes from './Compiled.css';

class Compiled extends Component {
    render() {
        return (
            <div>
                {/* <Navbar /> */}
                <Main/>
            </div>
        )
    }
};

export default Compiled;

