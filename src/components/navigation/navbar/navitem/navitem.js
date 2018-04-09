import React, {Component} from 'react';
import classes from './navitem.css';
import { NavLink } from 'react-router-dom';


class Navitem extends Component{
    render(){
        return (
            <li className={classes.Navitem}>
                <NavLink to={this.props.link} exact={true} activeClassName={classes.active}>
                    {this.props.children}
                </NavLink>
            </li>
        )
    }
}

export default Navitem;