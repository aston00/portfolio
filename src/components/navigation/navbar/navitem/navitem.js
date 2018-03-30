import React from 'react';
import classes from './navitem.css';
import { NavLink } from 'react-router-dom';


const navitem = (props) => (
    <li className={classes.Navitem}>
        <NavLink to={props.link} activeClassName={classes.active}>
        {props.children}
        </NavLink>
    </li>

);

export default navitem;