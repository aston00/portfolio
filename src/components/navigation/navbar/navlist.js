import React from 'react';
import classes from './navlist.css';
import Navitem from './navitem/navitem';
import Auth from './auth/auth';
import Navcaption from '../../../user/navcaption/navcaption';
const navigationItems = (props) => {
//    let sign = null;
//    if(!props.authed) {
//        sign = <Auth />;
//    } else {
//        sign = <Navcaption clickLogout={props.logout}/>;
//    }

    return (
        <ul className={classes.List}>

            <Navitem link="/" exact>Home</Navitem>
            <Navitem link="/about">Experience</Navitem>
            <Navitem link="/contacts">Contacts</Navitem>
            {/* {sign} */}
            {/* <Navitem link="/signup" >SignUp</Navitem> 
            <Navitem link="/signin" >SignIn</Navitem> */}
        </ul>
    );
};
export default navigationItems;
