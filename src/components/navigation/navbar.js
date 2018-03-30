import React, { Component } from 'react';
import classes from './navbar.css';
import img from '../../img/img.jpg';
import Navlist from './navbar/navlist';
import * as actionTypes from '../../store/actions/actionTypes';
import {connect} from 'react-redux';
class Navbar extends Component {

    //When user autherisated - instead of Signin and signup buttons he sees his name with logout button
    // state = {
    //     auth: true
    // }

    render() {
        return (
            <div className={classes.Navbar}>
                <img className={classes.logo} src={img} alt="logo" />

                
                
                <Navlist logout={this.props.logOutHandler} authed={this.props.auth}/>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logOutHandler: () => dispatch({type: actionTypes.LOG_OUT})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Navbar);